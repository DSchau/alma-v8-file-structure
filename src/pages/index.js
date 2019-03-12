import React from 'react'
import { navigate } from '@reach/router'

export default class Index extends React.Component {
  state = {
    locale: `en`,
    locales: ['en', 'ru', 'vn'],
  }

  handleLocaleChange = ev => {
    this.setState({
      locale: ev.target.value,
    })
  }

  handleNavigation = () => {
    navigate(`/${this.state.locale}/`, {
      replace: true,
    })
  }

  render() {
    const { locale, locales } = this.state
    return (
      <React.Fragment>
        <form onSubmit={this.handleNavigation}>
          <select
            name={locales[0]}
            value={locale}
            onChange={this.handleLocaleChange}
          >
            {locales.map(locale => (
              <option key={locale} value={locale}>
                {locale}
              </option>
            ))}
          </select>
          <button type="submit">Go to Locale</button>
        </form>
      </React.Fragment>
    )
  }
}
