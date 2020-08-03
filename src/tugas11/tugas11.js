import React from 'react';
import '../App.css';

class DataNama extends React.Component {
    render() {
        return this.props.nama;
    }
}

class DataHarga extends React.Component {
    render() {
        return this.props.harga;
    }
}

class DataBerat extends React.Component {
    render() {
        return <span>{this.props.berat} Kg </span>;
    }
}

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class Buah extends React.Component {
    render() {
        return (
            <>
                <h1 class="App"> Tabel Harga Buah </h1>
                <table cellPadding="1" cellSpacing="3" width="80%" class="center">
                    <tr class="bold atas">
                        <td>Nama </td>
                        <td>Harga </td>
                        <td>Buah </td>
                    </tr>
                    {dataHargaBuah.map(data => {
                        return (
                            <tr class="bawah">
                                <td>
                                    <DataNama nama={data.nama} />
                                </td>
                                <td>
                                    <DataHarga harga={data.harga} />
                                </td>
                                <td>
                                    <DataBerat berat={data.berat / 1000} />
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </>
        )
    }
}

export default Buah