import React, { useState, createRef, createContext } from 'react'


export default class Header extends React.Component<{}, { scroll: number }>{ 
    constructor(props: any) {
        super(props);

        this.state = {
            scroll: 1,
        };
    } 

    private header = createRef<HTMLElement>();

    componentDidMount(){
        window.onscroll = () => {
            const opacityRate = 2;
            let scroll = 100 - opacityRate* 100 * window.scrollY / this.header.current.clientHeight;
            this.setState({ scroll: scroll/100 });
        };
    }

    render(){ 

        const headerOpactity = {
            opacity: `${ this.state.scroll }`
        }

        return(
            <>
                <header ref={ this.header } style={ headerOpactity }>
                    { this.props.children }
                </header>
            </>
        )
    }
}
 