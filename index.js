let tableData = document.getElementById('tableData');


let url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=COP';

let datos = [] 
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
    let body = ''
    const { Data } = data
    Data.forEach((element, i )=> {
        if(element.CoinInfo.FullName == "Bitcoin" || element.CoinInfo.FullName == "Ethereum"){
            let dataRow = document.createElement('tr')

            let dataName = document.createElement('td')
            let dataPrice = document.createElement('td')
            let dataHighday = document.createElement('td')
            let dataLowday = document.createElement('td')
            let changeEPCT = document.createElement('td')

            dataName.textContent = element.CoinInfo.FullName
            dataPrice.textContent = element.DISPLAY.COP.PRICE
            dataHighday.textContent = element.DISPLAY.COP.HIGHDAY
            dataLowday.textContent = element.DISPLAY.COP.LOWDAY
            changeEPCT.textContent = element.DISPLAY.COP.CHANGEPCT24HOUR

            dataRow.appendChild(dataName)
            dataRow.appendChild(dataPrice)
            dataRow.appendChild(dataHighday)
            dataRow.appendChild(dataLowday)
            dataRow.appendChild(changeEPCT)

            tableData.appendChild(dataRow)
        }
    });
}

// Creating and adding data to first row of the table

