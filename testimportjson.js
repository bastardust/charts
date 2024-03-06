// Dakrmode
// Gráfico Backtest basado en json, utilizando TV, GoogleSheets y gsx2json (opciona Opensheet)




//const id = "12jZDFc3_rrpve4efGhpSKnwB0JWQqCMLlBoLWb3DgVU" // DivVolMix - ETH -1s
//const id = "1eqIoOmDcmAzK3y8DorLsCuqst4DsVE9HTo7U2PAwa_g" // DivVolMix - THETA - 1s (pausada)
//const id = "1imKkBY-m4bfDmH2aM14YHq1quz0W6CFBf2OB0CqRFpE" // DivVolMix - WAVES - 1s

//const id = "1oByVemG3YfrdrVGawhLzpLPa8aSsF1kXSL0kJsTSmaw" // Modo Zen - BTC - new 15m
//const id = "1pRWdnfbUMC2HxNOsu0USI8EUuZhpUScuFzKoGBg0EtI" // Modo Zen - ETH
//const id = "1dSSnUnRLKPXAGOUFQx69bmJYAeRJhIqZ5iTazYcbYpE" // Modo Zen - ETH - new 15m

//const id ="1G2lXcJFTPrgLu38iPdpes04RsTN3unWab6TyUn19wLM" // Mean reversion - LUNA - 1m
//const id ="1y90CJ0jVHS8d6nUel-6z1IAR88JYNOQ4weQDiuf3lEQ" // Mean reversion - THETA - 1m

//const id ="1TuZD-I1BJCThsiGkWRX0vuyAc3Hx_sWewPq9A2Gy5lg" // Nitro - AAVE - 3m
//const id ="1vAK_SbnXxAeaSe5yY08nXPnFY1EK2Tx2eNOYGWwwLPs" // Nitro - ADA - 2m (pausada)
//const id ="1AOPOBkKxEN7X6KcVj3MTzar6w4vc_u-pJ3kcIKq6f7I" // Nitro - EOS - 3m
//const id ="1ni_cbQH5fXd9-pfZDxd9iWB_RHGrApahSoI21f0m7XA" // Nitro - ETH - 3m
//const id ="1kVj6PX5Rs2SSwAYzIlXw8yJUblX-52Vb4FsyYafUxB8" // Nitro - FIL - 3m
//const id ="1DRPlEr7qKoIs5fI4deFaWNy0-c2x3g7FF76lhpk69fs" // Nitro - IOST - 2m (pausada)
//const id ="1geBGh8VlZQo4VS6UeX6EPba69FkvMEhvep_M0tivTV8" // Nitro - LUNA - 1m
//const id ="1FkXuvp1BGBIqQXXfE0k1k0-zpe6FgzQpnkrmrm0phTE" // Nitro - SRM - 1m
//const id ="1lJ-IbxmQ3ikFXyWcLlHKyvRP-jM68fsLUtuaPshkOqo" // Nitro - WAVES - 3m
//const id ="19BFRRiE-9eDKLJVd8rSQk0XnGXqHXKZuPCOKV0lQ4ks" // Nitro - ZIL - 3m


/* CARGA DE DATOS JSON ===================================================================================== */


// let buscar = $('#addEnlace');
// let inputfindID = $('#numberStgyApi');
// var change = 1;
// inputfindID.change(function(e) {
//   var change = parseInt(inputfindID.val())
//   console.log(change)
// })

// const id+change = "1YnfAgHxaO4nStTZAKOtGhAPXUtDS65TVwEgz-gIddrc" // DivVolMix alpha 1s
// const id+change = "1oPtoIimnkw3uhAJNzieFcTjh2k9CvBmLsoDL-uvKzu4" // DivVolMix - AVAX - 1s (pausada)
// const id+change = "16YJjgwv-v0D-ppAFgpHyQ6w7TgpT7vp7rxZljGJudMM" // DivVolMix - BTC - 1s



//
// let idStgy = ['1YnfAgHxaO4nStTZAKOtGhAPXUtDS65TVwEgz-gIddrc',
//           '1oPtoIimnkw3uhAJNzieFcTjh2k9CvBmLsoDL-uvKzu4',
//           '16YJjgwv-v0D-ppAFgpHyQ6w7TgpT7vp7rxZljGJudMM']
//
//
// fetch("https://gsx2json.com/api?id="+idStgy[change]+"&rows=false&sheet=hoja%201")
//
//   .then(response => response.json())
//   .then(data => {
//
//     console.log('idStgy[change]', idStgy[change])










// VERIFICA CARGA DEL DOM
$(function() {



// VARIABLES --> DOM
    let buscar = $('#addEnlace');
    let inputfindID = $('#numberHeroApi');
    let myChart = null;
    var id = inputfindID.val();


//Datos de prueba

let arrayDatos = [0,'1YnfAgHxaO4nStTZAKOtGhAPXUtDS65TVwEgz-gIddrc',
                   '1oPtoIimnkw3uhAJNzieFcTjh2k9CvBmLsoDL-uvKzu4',
                   '16YJjgwv-v0D-ppAFgpHyQ6w7TgpT7vp7rxZljGJudMM',
                  '12jZDFc3_rrpve4efGhpSKnwB0JWQqCMLlBoLWb3DgVU',
                  '1eqIoOmDcmAzK3y8DorLsCuqst4DsVE9HTo7U2PAwa_g',
                  '1imKkBY-m4bfDmH2aM14YHq1quz0W6CFBf2OB0CqRFpE',
                  '1oByVemG3YfrdrVGawhLzpLPa8aSsF1kXSL0kJsTSmaw',
                  '1pRWdnfbUMC2HxNOsu0USI8EUuZhpUScuFzKoGBg0EtI',
                  '1dSSnUnRLKPXAGOUFQx69bmJYAeRJhIqZ5iTazYcbYpE',
                  '1G2lXcJFTPrgLu38iPdpes04RsTN3unWab6TyUn19wLM',
                  '1y90CJ0jVHS8d6nUel-6z1IAR88JYNOQ4weQDiuf3lEQ',
                  '1TuZD-I1BJCThsiGkWRX0vuyAc3Hx_sWewPq9A2Gy5lg',
                  '1vAK_SbnXxAeaSe5yY08nXPnFY1EK2Tx2eNOYGWwwLPs',
                  '1AOPOBkKxEN7X6KcVj3MTzar6w4vc_u-pJ3kcIKq6f7I',
                  '1ni_cbQH5fXd9-pfZDxd9iWB_RHGrApahSoI21f0m7XA',
                  '1kVj6PX5Rs2SSwAYzIlXw8yJUblX-52Vb4FsyYafUxB8',
                  '1DRPlEr7qKoIs5fI4deFaWNy0-c2x3g7FF76lhpk69fs',
                  '1geBGh8VlZQo4VS6UeX6EPba69FkvMEhvep_M0tivTV8',
                  '1FkXuvp1BGBIqQXXfE0k1k0-zpe6FgzQpnkrmrm0phTE',
                  '1lJ-IbxmQ3ikFXyWcLlHKyvRP-jM68fsLUtuaPshkOqo',
                  '19BFRRiE-9eDKLJVd8rSQk0XnGXqHXKZuPCOKV0lQ4ks',
                  '1w-EZkC-spGVShbrwlv8dQGN_x-NHnKrS31R7gmbL3mE', // ZEC
                  '1J_7-48dTIXV2UaQ4Grekhm_ijlwukFB0PbfGTJJ-AQo', // FTM
                  '1Ku_VD5IfwbBmcC6yWlj7229eo3WqcimrEWs0p7h_uv8', // Repanocha - BTC - 30m
                  '1z6NZT3e-4jxSKPuAfCWBnM5IO_UEAhkNfOD-12201Gc', // Repanocha - BTC - 1H
		  '105qwlRzygPEFmRIKRsjDTlyxhao8x2LZ7JpGWjDyJAE'  // Magnifier - AAVE - 4H
                ]





    // Eventos para sacar el número del input
    inputfindID.change(function(e) {

      let id = inputfindID.val();

    // Validación input (número mayor a cero)
      if (id.length != 0 && id > 0) {
        buscarHeroe(id)

      } else {
        alert('Ingresa un número mayor a cero')
      }
    })

    // Validación botón buscar (número mayor a cero)
    buscar.change(function(e) {
      let id = inputfindID.val()


      if (id.length != 0 && id > 0) {
        buscarHeroe(id)
      } else {
        alert('Ingresa un número mayor a cero')
      }
    })

    // AJAX
    const buscarHeroe = (id) => {


      $.ajax({

        // Parámetros de la consulta
        // url de la api reconstruida con id
        url: `https://gsx2json.com/api?id=${arrayDatos[id]}&rows=false&sheet=hoja%201`,
        //url: `https://www.superheroapi.com/api.php/4905856019427443/${arrayDatos[id]}`,
        // tipo de consulta GET, porque vamos a buscar información
        type: 'GET',
        // tipo de documento
        dataType: 'json',

        // Se crean 3 métodos o funciones como:
        // si la consulta es correcta
        success: function(response) {
          console.log('Salida de response', response)
          const data = response


          let capital = 100000;

          var price = data.columns.Precio; // devuelve los precios
          //var date = data.columns.Fecha;                // devuelve las fechas (formato complleto)

          let largoData = (data.columns.Precio).length; // devuelve la cantidad de datos (celdas)

          const operaciones = Array.from({ // crea un array basado en el largo de los datos
            length: (largoData / 2)+1
          }, (v, i) => i + 1); // se utiliza para contabilizar las operaciones
          const ganancias = []; // función para obtener el profit de cada operación
          const ganAcum = [0]; // función para obtener el profit de cada operación

          function profit(op) {
            for (let i = 0; i <= op.length; i++) // (mediante un ciclo for)
              if (i % 2 == 0) { // si el indice es par
                let venta = op[i + 1] // señala que los indices impares con compras IMPORTANTE
                let compra = op[i] // señala que los indices pares con compras IMPORTANTE

                //  let res = venta - compra                  // I M P O R T A N T E (primera version solo calculaba la ganancia real)
                //  let res = ((venta - compra)/compra)*100   // I M P O R T A N T E (segunda version calcula el cambio porcentual)
                /*  en una tercera version, calculamos las ganancias en base a un capital de 100000. Así obtenemos una simulación
                    del capital ganado, pero a su vez obtenemos un vistazo al cambio porcentual. Ej: si pierde 8k, está perdiento 8% */

                // V3.0
                let coins = capital / compra;
                let res = (venta * coins) - (compra * coins)

                ganancias.push(res) // ingresa los datos de 'res' en el array 'ganancias'
              }
          }



          profit(price)

          function add(aa) {
            for (let i = 1; i <= aa.length; i++) {
              const suma = ganancias.slice(0, i).reduce(function(acumulador, valorActual) {
                return acumulador + valorActual
              })
              ganAcum.push(suma)
            }
          }

          final = add(ganancias)


          const wins = [];
          const loss = [];

          function winloss(data) {
            for (let i = 0; i <= data.length; i++)
              if (data[i] > 0) {
                wins.push(data[i]);
              } else {
                loss.push(data[i]);
              }
          }

          winloss(ganancias);

          const reallyLoss = loss.slice(0, loss.length - 2)
          const best = Math.max(...wins).toFixed(2);
          const bestPercent = ((100 / capital) * best).toFixed(1) + '%';
          const worse = Math.min(...reallyLoss).toFixed(2);
          const worsePercent = ((100 / capital) * worse).toFixed(1) + '%';
          const ganadoras = wins.length;
          const perdedoras = reallyLoss.length;
          const ratio = ((ganadoras / perdedoras) * 100).toFixed(0) + '%';
          const neto = ganAcum[ganAcum.length - 2].toFixed(2);
          const netoPercent = ((100 / capital) * neto).toFixed(2) + '%';
          const minPrice = Math.min(...price).toFixed(2);

          console.log('Neto ----->', neto)
          console.log('Neto % ----->', netoPercent)



              /* GRÁFICO Chart.js.org ===================================================================================== */



    const ctx = document.getElementById('myChart').getContext('2d');
    if (myChart!=null){
          myChart.destroy();
    }
     myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: operaciones,
        datasets: [{
          label: 'Profit',
          data: ganAcum,
          tension: 0,
          borderColor: ['rgb(233, 81, 47)'], // (216, 187, 120) // (187, 143, 252)
          borderWidth: 1.5
        }]

      },
      options: {
        plugins: {
          title: {
            display: false,
            text: 'Custom Chart Title',
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {
            display: false,
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {

          y: {
            grid: {
              color: '#202029'
            }
          },
          x: {
            grid: {
              display: false,
              color: '#202029'
            }
          }
        }

      }

    });



    // let fecha1 = document.getElementById("fecha1");
    // tfecha1.innerHTML = `${drawdownPercent}`;



        /* OTROS DATOS (temporal) ===================================================================================== */

    // const otrosDatos = document.getElementById('otrosDatos');
    //
    // let other = `${ganancias}`
    // otrosDatos.innerHTML = other;
    let ticker = data.columns.Ticker;
    let stgy = data.columns.Estrategia;
    let tf = data.columns.Timeframe;
    let fullname = data.columns.Fullname;
    let inicio = data.columns.Fecha[0].slice(0, 10);
    const precioInicial = (data.columns.Precio[0]);
    const precioFinal = price[price.length - 1];
    const hold = ((precioFinal - precioInicial) * capital).toFixed(2);
    const holdPercent = (((precioFinal - precioInicial) / precioInicial) * 100).toFixed(1) + '%';
    const drawdown = Math.min(...ganAcum.slice(0, ganAcum.length - 2)).toFixed(2);
    const drawdownPercent = ((100 / capital) * drawdown).toFixed(2) + '%';
    const drawRealPercent = (((minPrice - precioInicial) / precioInicial) * 100).toFixed(2);
    const drawReal = ((drawRealPercent/100)*capital).toFixed(2);


    console.log('Precio Inicial ----->', precioInicial)
    console.log('Precio Final ----->', precioFinal)
    console.log('Hold ----->', hold)
    console.log('Hold % ----->', holdPercent)
    console.log('Max Drawdown ----->', drawdown)
    console.log('Max Drawdown % ----->', drawdownPercent)
    console.log('GanAcum ----->',ganAcum)
    console.log('Precios ----->', price)
    console.log('Precio Inicial ----->', data.columns.Precio[0])
    console.log('Precio final ----->', price[price.length - 1])
    console.log('Operaciones ----->', operaciones)
    console.log('Precio mínimo ----->', minPrice)
    console.log('Drawdown real ----->', drawReal)
    console.log('Drawdown real % ----->', drawRealPercent)

    // let element = document.getElementById("sidebar");
    // element.innerHTML = `<h3>${fullname}</h3><h4>${stgy}</h4><h1 class="display-5">${netoPercent}</h1><hr><p>Timeframe: ${tf}</p><p>Ticker: ${ticker}</p><p>Inicio: ${inicio}</p><p>Ganadoras: ${ganadoras}</p><p>Perdedoras: ${perdedoras}</p><p>Ratio win/loss: ${ratio}</p><p>Mejor trade: ${bestPercent}</p><p>Peor trade: ${worsePercent}</p>`;

    let dStgy = document.getElementById("dashStgy");
    dStgy.innerHTML = `${stgy}`;

    let dTicker = document.getElementById("dashTicker");
    dTicker.innerHTML = `${fullname} (${ticker})`;

    let dInicio = document.getElementById("dashInicio");
    dInicio.innerHTML = `&nbspTF: ${tf} &nbsp&nbsp|&nbsp&nbsp <i class="material-symbols-outlined icon-xs text-white">calendar_today</i>&nbsp${inicio}`;

    let dProfitpc = document.getElementById("dashProfitpc");
    dProfitpc.innerHTML = `${netoPercent}`;

    let dProfit = document.getElementById("dashProfit");
    dProfit.innerHTML = `${neto} usd`;

    // let dCapital = document.getElementById("dashCapital");
    // dCapital.innerHTML = `Cap. inicial: ${capital} usd`;

    let dDrawdownpc = document.getElementById("dashDrawdownpc");
    dDrawdownpc.innerHTML = `${drawdownPercent}`;

    let dDrawdown = document.getElementById("dashDrawdown");
    dDrawdown.innerHTML = `${drawdown} usd`;

    let dHoldpc = document.getElementById("dashHoldpc");
    dHoldpc.innerHTML = `${holdPercent}`;

    let dHold = document.getElementById("dashHold");
    dHold.innerHTML = `Drawdown Buy&Hold: ${drawRealPercent}% (${drawReal})`;

    let dWinloss = document.getElementById("dashWinloss");
    dWinloss.innerHTML = `${ganadoras} / ${perdedoras}`;

    let dBest = document.getElementById("dashBest");
    dBest.innerHTML = `${bestPercent}`;

    let dWorse = document.getElementById("dashWorse");
    dWorse.innerHTML = `${worsePercent}`;



    var myArray = data

    buildTable(myArray)



    function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''  // Importante para resetear la tabla

    for (var i = 1; i < 13; i++){
      var row = `<tr>
              <td>${data.columns.Fecha[data.columns.Fecha.length-i]}</td>
              <td>${data.columns.Precio[data.columns.Precio.length-i]}</td>
            </tr>`
      table.innerHTML += row

    }
    }



console.log('data.columns.Fecha', data.columns.Fecha)

console.log('id', id)


        },

        // si la respuesta es incorrecta
        error: function() {
          alert('Hay problemas con la API')
        },
        // si la consulta se hace
        complete: function() {
          // alert('Se realizó la consulta')

        }

  })};


console.log('id fuera -->', id)
console.log('arrayDatos[id]', arrayDatos[id])


// Define spreadsheet URL.
//var mySpreadsheet = 'https://gsx2json.com/api?id=1YnfAgHxaO4nStTZAKOtGhAPXUtDS65TVwEgz-gIddrc&rows=false&sheet=hoja%201';

// var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1myFejlng2rj_xjNVzJXe3vU7JY8Yfv9i3fvhOWCrGAU/edit#gid=0';
//var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Load all hitters and format with DataTables.
// $('#raw-table').sheetrock({
//   url: mySpreadsheet,
//   query: "select A,B order by A desc",
//   fetchSize: 12
// }).on('sheetrock:loaded', function() {
//   $(this).DataTable();
// });


//let mySpreadsheet = `https://docs.google.com/spreadsheets/d/${arrayDatos[id]}/edit#gid=0`;


/// Load all hitters and format with DataTables.
// $('#raw-table').sheetrock({
//   url:  mySpreadsheet,
//   query: "select A,B order by A desc",
// }).on('sheetrock:loaded', function () {
//   $(this).DataTable();
// });


// let fecha1 = document.getElementById("fecha1");
//     tfecha1.innerHTML = ``;








})
