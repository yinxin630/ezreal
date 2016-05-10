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
<Ezreal type="fade-appear" duration={ 500 }>
    <YourComponent/>
</Ezreal>
```

### Enter And Leave Animation

Enter/leave animation is for the component, which you can control it to be showed or not. So you should pass boolean property display to emit `Enter` or `Leave` action

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
                <Ezreal display={ this.state.show } type="fade-enter-leave" duration={ 500 }>
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

You can also use single enter or leave animation. Such as `fade-enter` or `fade-leave`

### Custom Animation

You can pass property animations to Ezreal component. Your animation action should be contained in the property animations

example:
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
 
<Ezreal type="custom-appear" duration={ 500 }>
    <YourComponent/>
</Ezreal>
 ```
 
 The animations contain 6 status:  
 
 1. `componentWillAppear`
 2. `componentDidAppear`
 3. `componentWillEnter`
 4. `componentDidEnter`
 5. `componentWillLeave`
 6. `componentDidLeave`

## Available Type

* fade
* scale
* wave
* rotate
* drop
* fly
* custom

## Contribute

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'feat|fix|refactor|doc(modified area): a short description'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request