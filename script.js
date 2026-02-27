function downloadPDF() {
    const element = document.querySelector('#pdf-content');

    if (!element) {
        console.error('No se encontró el elemento #pdf-content');
        return;
    }

    const opt = {
        margin: [10, 5, 15, 5],
        filename: 'Hoja_de_vida_Xiara_Serna_Castano.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}