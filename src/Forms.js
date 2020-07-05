import React from 'react';

export default class TextBox extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '', encryptText: '', keyGenerated: ''
        }
    }
    
    onTextChanged = (e) => {
        this.setState({ data: e.target.value })
    }

    clicked = (e) => {
        let originalText = this.state.data
        const keyNum = Math.floor(11 + Math.random() * 89)
        const vowelShiftNum = Math.trunc(keyNum / 10)
        const consonantShiftNum = keyNum % 10
        const vowelArray = ['A', 'E', 'I', 'O', 'U']
        const lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'U', 'W', 'X', 'Y', 'Z']
        var encryptedArray = []

        for (var i = 0; i < originalText.length; i++) {
            let flagUpperCase = 0
            // check original text character UpperCase or not
            if (originalText.charAt(i) == originalText.charAt(i).toUpperCase()) {
                flagUpperCase = 1
            }

            // check original text character vowel or not
            if (vowelArray.includes(originalText.charAt(i).toUpperCase())) {
                let k = lettersArray.indexOf(originalText.charAt(i).toUpperCase())
                let shiftIndex = k + vowelShiftNum

                // check if total shiftIndex exceed lettersArray length and minus it
                if (shiftIndex > lettersArray.length - 1) {
                    shiftIndex = shiftIndex - (lettersArray.length - 1) - 1
                }
                if (flagUpperCase == 1) {
                    encryptedArray.push(lettersArray[shiftIndex])
                } else {
                    encryptedArray.push(lettersArray[shiftIndex].toLowerCase())
                }
            } else {
                // check if original text contains special character
                if (/^[a-zA-Z]*$/.test(originalText.charAt(i)) == true) {
                    let k = lettersArray.indexOf(originalText.charAt(i).toUpperCase())
                    let shiftIndex = k + consonantShiftNum
                    if (shiftIndex > lettersArray.length - 1) {
                        shiftIndex = shiftIndex - (lettersArray.length - 1) - 1
                    }
                    if (flagUpperCase == 1) {
                        encryptedArray.push(lettersArray[shiftIndex])
                    } else {
                        encryptedArray.push(lettersArray[shiftIndex].toLowerCase())
                    }
                }else{
                    encryptedArray.push(originalText.charAt(i))
                }

            }
        }
        
        this.setState({ encryptText: encryptedArray.join('') })
        this.setState({ keyGenerated: keyNum})


        // console.log(originalText)
        // console.log(encryptedArray)
        // console.log(keyNum)
        // console.log(vowelShiftNum)
        // console.log(consonantShiftNum)

    }

    render() {
        return (
            <div className="container">
                <h1>ENCRYPTION APP</h1><br />
                <input onChange={this.onTextChanged} type="text" className="myTextBox" size="70" placeholder="Enter plain text"></input>
                <br /><br />
                <span className="left">Key generated : {this.state.keyGenerated} </span>
                <input className="button" type="button" value="Submit" onClick={this.clicked} />
                <br /><br />
                <p>Result:</p>
                <input type="text" className="myTextBox" size="70" value={this.state.encryptText} readOnly></input>
            </div>
        )

    }

}