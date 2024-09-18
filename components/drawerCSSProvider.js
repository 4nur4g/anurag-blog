const DrawerCSSProvider = ({ children }) => {
  return (
    <div vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background">
        {children}
      </div>
    </div>
  )
}
export default DrawerCSSProvider
