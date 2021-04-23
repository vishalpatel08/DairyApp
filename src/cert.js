console.log("hello Vishal");

const generatePDF = async(name) => {
    const { PDFDocument, rgb } = PDFLib;
    
    const exB = await fetch("./cert.pdf").then((res) => {
        return res.arrayBuffer();
    });

    const pdfDoc = await PDFDocument.load(exB)

    const uri = await pdfDoc.saveAsBase64({datauri: true})

    document.querySelector("#certpdf").src = uri;
};

generatePDF()

