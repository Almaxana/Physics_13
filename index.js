function CountFunction() {
    let d = parseFloat(document.getElementById("d").value) * Math.pow(10, -6);
    let b = parseFloat(document.getElementById("b").value) * Math.pow(10, -6);
    let N = parseFloat(document.getElementById("N").value);
    let lambda = parseFloat(document.getElementById("lambda").value) * Math.pow(10, -9);

    let sinf = [];
    let I = [];
    

    for (let i = -10*lambda/d; i < 10*lambda/d; i+=0.000001) {
        sinf.push(i);
        let v1 = Math.PI*b*i/lambda
        let v2 = Math.PI * d/lambda*i
        console.log(Math.pow(Math.sin(v1), 2) / Math.pow(v1, 2) * Math.pow(Math.sin(N*v2), 2) / Math.pow(Math.sin(v2), 2))
        I.push(Math.pow(Math.sin(v1), 2) / Math.pow(v1, 2) * Math.pow(Math.sin(N*v2), 2) / Math.pow(Math.sin(v2), 2));
    }


    let layout = {
        title: 'Зависимость I(sinφ)',
        xaxis: {
            title: 'sinφ'
        },
        yaxis: {
            title: 'Интенсивность, Вт/м^2'
        },

    };
    Plotly.newPlot(
        "myDiv",
        [{
            mode: 'lines',
            type: 'scatter',
            x: sinf,
            y: I,
        }],
        layout
    );

    return false;
}
