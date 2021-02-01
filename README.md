# LocalPDF

A CLI tool to build [Root](https://root.co.za) compatible PDF documents locally.

## Usage

1. Install wkhtmltopdf locally on your machine: [download](https://wkhtmltopdf.org/downloads.html#stable)
2. Install localPDF globally `npm install localpdf -g`
3. Run it in whichever folder has your html file `localpdf myfile.html myoutputfile.pdf`

```
Usage: localpdf [input_file] [output_file]
Arguments:
  > input_file   required  Path to input HTML file
  > output_file  optional  Path to output PDF file
Example: localpdf example.html example.pdf
```

## Development

### Installation

1. Install wkhtmltopdf locally on your machine: [download](https://wkhtmltopdf.org/downloads.html#stable)
2. Clone this repo by using the following command: ` git clone git@github.com:RootBank/localpdf.git`
3. Install the dependencies: `cd localpdf` and `npm install`

### Usage

After you've installed this repo, you can convert files to PDF using the following command (make sure you've `cd`'d into the repo folder)

`node index.js [input_file] [output_file]`

## Example Usage

1. Create a HTML document
2. Locate the folder under your Computer/Users/localpdf
3. Move your HTML document to this folder.
4. Back to Terminal/Command and making sure you are in the localpdf location (if you are not quit and open the repo using your name e.g. `cd /Users/rebeccalain/localpdf`
5.  `node index.js [input_file] [output_file]` e.g. `node index.js index.html beccatest2.pdf`
6. On your desktop open the localpdf folder and you will now see a new pdf document. Open it to see the results from the html!

## Deployment to npm registry

1. Make sure your local npm setup is configured and that you have appropriate access
2. Increase the minor or major version in the `package.json`
3. After pushing changes to github; run `npm publish`
