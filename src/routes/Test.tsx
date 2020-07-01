import  React from 'react'
import {Button} from 'antd'
interface IAppProps {
    msg:string
}
interface IAppState {
    money:number
}

class Test extends React.Component<IAppProps, IAppState> {
static defaultProps ={
    msg:"这里是TS"
}
constructor(props){
    super(props)
    this.state ={
        money:2000
    }
}

hello = (msg: string):void=>{
    alert(msg)
}



  public render(): JSX.Element {
    return (
      <div>
        <Button type="ghost" onClick={() => {this.hello('11')}}>你好</Button>
        这是typescript了哦~
      </div>
    )
  }
}
export default Test;
