import {Button, Htag} from "../components";

export default function Home() {
  return (
    <div>
     <Htag tag="h1">Hello</Htag>
        <Button appearance="primary" arrow="right">Hello World</Button>
        <Button appearance="ghost" arrow="right">Hello World</Button>
    </div>
  )
}
