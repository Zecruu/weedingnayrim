// Google Apps Script for Wedding RSVP
// This script should be deployed as a web app with execute permissions set to "Anyone"

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    // Your actual Google Sheets ID
    const spreadsheetId = '1FlYbqDEaolZU4l9gPDnVqSErhS_WZXhq8bjSGR93sTw';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get parameters from either GET or POST request
    const params = e.parameter || {};
    
    // Extract data
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const nombre = params.nombre || '';
    const telefono = params.telefono || '';
    const asistira = params.asistira || '';
    const plusOne = params.plusOne || '';
    const nombrePlusOne = params.nombre_plus_one || '';
    
    // Validate required fields
    if (!nombre || !telefono || !asistira) {
      const errorResponse = {
        success: false,
        message: 'Faltan campos requeridos'
      };
      
      if (params.callback) {
        return ContentService
          .createTextOutput(params.callback + '(' + JSON.stringify(errorResponse) + ')')
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      
      return ContentService
        .createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add data to spreadsheet
    sheet.appendRow([
      timestamp,
      nombre,
      telefono,
      asistira,
      plusOne,
      nombrePlusOne
    ]);
    
    // Success response
    const successResponse = {
      success: true,
      message: 'RSVP guardado exitosamente',
      data: {
        timestamp: timestamp,
        nombre: nombre,
        telefono: telefono,
        asistira: asistira,
        plusOne: plusOne,
        nombrePlusOne: nombrePlusOne
      }
    };
    
    // Handle JSONP callback
    if (params.callback) {
      return ContentService
        .createTextOutput(params.callback + '(' + JSON.stringify(successResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
    // Regular JSON response
    return ContentService
      .createTextOutput(JSON.stringify(successResponse))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in handleRequest:', error);
    
    const errorResponse = {
      success: false,
      message: 'Error interno del servidor: ' + error.toString()
    };
    
    if (e.parameter && e.parameter.callback) {
      return ContentService
        .createTextOutput(e.parameter.callback + '(' + JSON.stringify(errorResponse) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  const testEvent = {
    parameter: {
      nombre: 'Test User',
      telefono: '1234567890',
      asistira: 'Sí',
      plusOne: 'No',
      nombre_plus_one: ''
    }
  };
  
  const result = handleRequest(testEvent);
  console.log('Test result:', result.getContent());
}
