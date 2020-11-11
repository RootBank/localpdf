const wkhtmltopdf = require('wkhtmltopdf');
const fs = require('fs');


const convertFile = async (inputPath, outputPath) => {
  // Options based on Root Platform's configuration
  const options = {
    pageSize: 'A4',
    marginBottom: '2cm',
    marginTop: '2cm',
    marginLeft: '2cm',
    marginRight: '2cm',
    disableSmartShrinking: true,
    dpi: '300',
    zoom: '1.28',
  };

  const sourceFile = fs.readFileSync(inputPath, 'utf8');
  await wkhtmltopdf(sourceFile, { ...options, output: outputPath } );
  console.log(`HTML file converted to PDF: ${inputPath} > ${outputPath}`);
};

// Process command line options
if (process.argv.length === 3) {
  const inputPath = process.argv[2];
  const outputPath = 'output.pdf';
  convertFile(inputPath, outputPath);
} else if (process.argv.length === 4) {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];
  convertFile(inputPath, outputPath);
} else {
    // All other things should show "help"
    console.log(`
    Usage: localpdf [input_file] [output_file]
    Arguments:
      > input_file   required  Path to input HTML file
      > output_file  optional  Path to output PDF file
  `);
}
