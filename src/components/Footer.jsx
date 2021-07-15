function Footer () {
    return (
        <footer className="page-footer #b0bec5 blue-grey lighten-3">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Maria Varfolomeeva
            <a className="grey-text text-lighten-4 right" href="https://github.com/Mary-Varf/" target="_blank" rel="noreferrer">
              More Links</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer}