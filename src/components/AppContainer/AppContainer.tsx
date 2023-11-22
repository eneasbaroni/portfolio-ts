interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = (props: AppContainerProps) => {

  return (
    <div className="App" id="app">
      {props.children}
    </div>
  )
}

export default AppContainer
