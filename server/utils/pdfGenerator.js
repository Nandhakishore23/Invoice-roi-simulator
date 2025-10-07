const PDFDocument = require('pdfkit');

exports.generatePDF = (scenario) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfData = Buffer.concat(buffers);
            resolve(pdfData);
        });

        doc.fontSize(20).text('Invoicing ROI Simulator Report', { align: 'center' });
        doc.moveDown();
        for (let key in scenario) {
            doc.fontSize(12).text(`${key}: ${scenario[key]}`);
        }
        doc.end();
    });
};
