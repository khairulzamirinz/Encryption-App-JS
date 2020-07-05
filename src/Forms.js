import React from 'react';

export default class TextBox extends React.Component {
    constructor() {
        super();
        this.state = {
            data: '', encryptText: ''
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
                if (shiftIndex > lettersArray.length - 1) {
                    shiftIndex = shiftIndex - (lettersArray.length - 1) - 1
                }
                if (flagUpperCase == 1) {
                    encryptedArray.push(lettersArray[shiftIndex])
                } else {
                    encryptedArray.push(lettersArray[shiftIndex].toLowerCase())
                }
            } else {
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
        console.log(encryptedArray.join(''))
        this.setState({ encryptText: encryptedArray.join('') })


        // console.log(originalText)
        // console.log(encryptedArray)
        // console.log(keyNum)
        // console.log(vowelShiftNum)
        // console.log(consonantShiftNum)

    }

    render() {
        return (
            <div>
                Enter text to be encrypted: &nbsp;
                <input onChange={this.onTextChanged} type="text"></input>
                <br />
                <br />
                <input type="button" value="Submit" onClick={this.clicked} />
                <h1>{this.state.encryptText}</h1>
            </div>
        )

    }

}