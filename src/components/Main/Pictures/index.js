import React, { Component } from 'react';

const style = {
    img: {
        flexGrow:    '1',
        flexBasis:   '0',
        height:      '300px',
        maxWidth:    '450px',
        minWidth:    '300px',
        marginRight: '20px'
    },
    section: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        height:         '100%',
        flexDirection:  'row',
        flexWrap:       'wrap'
    }
}

class Pictures extends Component {
    render() { 
        return ( 
            <section style = {style.section} >
                <img alt = 'cat-1' src = 'http://nerlin.ru/_pu/72/88713703.jpg'  style = {style.img} />
                <img alt = 'cat-2' src = 'http://nerlin.ru/_pu/72/88713703.jpg'  style = {style.img} />
                <img alt = 'cat-3' src = 'http://nerlin.ru/_pu/72/88713703.jpg'  style = {style.img} />
            </section>
         );
    }
}
 
export default Pictures;