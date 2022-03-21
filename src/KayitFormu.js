// rce
import './KayitFormu.css';
import React, { Component } from 'react';

class KayitFormu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ad: "Ali",
            soyad: "Öz"
        };
        this.degisimVar = this.degisimVar.bind(this); // event metodundaki this artık class'a referans verecek
        this.formTeslim = this.formTeslim.bind(this);
    }

    degisimVar(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }); // bkz. computed property names
    }

    formTeslim(event) {
        event.preventDefault();
        this.props.kaydedildiginde(this.state.ad, this.state.soyad);
    }

    render() {
        return (
            <div className="KayitFormu">
                <h2>Kullanıcı Kaydı</h2>
                <p>{this.state.ad} {this.state.soyad}</p>
                <form onSubmit={this.formTeslim}>
                    <div>
                        <label>Ad</label>
                        <input type="text" name="ad" value={this.state.ad} onChange={this.degisimVar} required />
                    </div>
                    <div>
                        <label>Soyad</label>
                        <input type="text" name="soyad" value={this.state.soyad} onChange={this.degisimVar} required />
                    </div>
                    <button>Kaydet</button>
                </form>
            </div>
        );
    }
}

export default KayitFormu;
