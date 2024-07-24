<?php
// Incluir la biblioteca PhpSpreadsheet
require 'PhpSpreadsheet/src/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

// Ruta al archivo Excel
$inputFileName = '../../backend/Productos_Pagina.xlsx'; // Actualiza la ruta según tu estructura de archivos

// Obtener el ID del producto desde la solicitud GET
if (isset($_GET['id'])) {
    $productId = $_GET['id'];

    // Cargar el archivo Excel
    $spreadsheet = IOFactory::load($inputFileName);
    $sheet = $spreadsheet->getActiveSheet();

    // Convertir los datos de la hoja activa a un array asociativo
    $data = $sheet->toArray(null, true, true, true);

    // Buscar el producto por su ID
    $producto = null;
    foreach ($data as $row) {
        if ($row['ID'] == $productId) {
            $producto = $row;
            break;
        }
    }

    // Devolver los datos del producto encontrado como JSON
    if ($producto) {
        header('Content-Type: application/json');
        echo json_encode($producto);
    } else {
        http_response_code(404);
        echo json_encode(array('message' => 'Producto no encontrado'));
    }
} else {
    http_response_code(400);
    echo json_encode(array('message' => 'ID de producto no especificado'));
}
?>