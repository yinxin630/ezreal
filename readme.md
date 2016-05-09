# Ezreal.js

a useful tool for react animation effects

## Install

use npm: `npm run ezreal --save`

## Usage

### With ES6/import

```
import Ezreal from 'ezreal';

```

### With CommonJS/require

```
const Ezreal from 'ezreal';
```

### Appear Animation

Appear animation is for component that show with page render

```
<Ezreal type="fade" duration={ 500 }>
    <YourComponent/>
</Ezreal>
```

### Enter And Leave Animation

Enter/leave animation is for component that you control it showed

```
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render () {
        return (
            <div>
                <p>{ this.props.type }</p>
                <button onClick={ this.handleClick }>{ this.state.show ? 'hidden' : 'show' }</button>
                <br/>
                <Ezreal display={ this.state.show } type="fade" duration={ 500 }>
                    <YourComponent/>
                </Ezreal>
            </div>
        );
    }
    handleClick () {
        this.setState({ show: !this.state.show });
    }
}
```

### Custom Animation

You can pass property animations to Ezreal component. The property animations contain your animation action

 example animations
 ```
 const animations = {
     componentWillAppear: {
         0: {
             transform: 'scale(2)'
         },
         100: {
             transform: 'scale(1)'
         }
     },
 }
 ```
 
 The animations contain 6 status. `componentWillAppear`, `componentDidAppear`, `componentWillEnter`, `componentDidEnter`, `componentWillLeave`, `componentDidLeave`