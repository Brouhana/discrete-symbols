import { useState, useEffect } from 'react'
import symbols from './symbols.json'
import Symbol from './components/Symbol'
import Header from './components/Header'

function App() {
  const [searchVal, setSearchVal] = useState('')
  const [preference, setPreference] = useState({ copyAs: 'plain_text' })

  useEffect(() => {
    let LSCopyAsPreference = localStorage.getItem('copyAs_preference')
    if (LSCopyAsPreference !== null) {
      setPreference({ copyAs: LSCopyAsPreference })
    }
  }, [])

  const handleFilters = (value) => {
    return (
      value.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      value.alt_name.toLowerCase().includes(searchVal.toLowerCase()) ||
      value.symbol.toLowerCase().includes(searchVal.toLowerCase()) ||
      value.TeX.toLowerCase().includes(searchVal.toLowerCase())
    )
  }

  return (
    <>
      <Header
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        preference={preference}
        setPreference={setPreference}
      />

      <div className="container" style={{ paddingTop: '5.3rem' }}>
        <div className="row">
          {symbols
            .filter((value) => {
              if (searchVal === '') {
                return value
              }
              if (handleFilters(value)) {
                return value
              }
            })
            .map((symbol) => (
              <div className="col-3">
                <Symbol
                  key={symbol.symbol}
                  char={symbol.symbol}
                  name={symbol.name}
                  TeX={symbol.TeX}
                  copyAsPreference={preference.copyAs}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
