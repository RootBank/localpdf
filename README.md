# LocalPDF

A CLI tool to build [Root](https://root.co.za) compatible PDF documents locally.

## Usage

1. Install wkhtmltopdf locally on your machine: [download](https://wkhtmltopdf.org/downloads.html#stable)
2. Install localPDF `npm install localpdf -g`
3. Run it in the folder with your html file `localpdf myfile.html myoutputfile.pdf`

```
Usage: localpdf [input_file] [output_file]
Arguments:
  > input_file   required  Path to input HTML file
  > output_file  optional  Path to output PDF file
```

## Development

### Installation

1. Install wkhtmltopdf locally on your machine: [download](https://wkhtmltopdf.org/downloads.html#stable)
2. Clone this repo: `git clone ...`
3. Install the dependencies: `cd localpdf` and `npm install`

[todo: add this to npm registry and allow direct usage]

### Usage

After you've installed this repo, you can convert files to PDF using the following command (make sure you've `cd`'d into the repo folder)

`node index.js`
