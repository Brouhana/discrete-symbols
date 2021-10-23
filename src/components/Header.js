import { useRef, useEffect } from "react";
import { ClearIcon } from "./Icons";

const Header = ({ searchVal, setSearchVal, preference, setPreference }) => {
  const inputAutoFocus = useRef(null);

  useEffect(() => {
    if (inputAutoFocus.current) {
      inputAutoFocus.current.focus();
    }
  }, []);

  const changeCopyPreference = (copyAs) => {
    if (copyAs === "plain_text") {
      setPreference({ copyAs: "TeX" });
    }
    if (copyAs === "TeX") {
      setPreference({ copyAs: "plain_text" });
    }
    localStorage.setItem('copyAs_preference', preference.copyAs);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              ref={inputAutoFocus}
              placeholder="Search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="form-control"
            />
            {searchVal !== "" ? (
              <span className="input-clear" onClick={() => setSearchVal("")}>
                <ClearIcon />
              </span>
            ) : null}
          </div>
          <div className="col-6">
            <div className="copy-options-container">
              <div className="copy-options-child">
                <button
                  className={`copy-options-button ${
                    preference.copyAs === "plain_text"
                      ? "copy-options-button-active"
                      : ""
                  }`}
                  onClick={() => changeCopyPreference(preference.copyAs)}
                >
                  Copy plain text
                </button>
              </div>
              <div className="copy-options-child">
                <button
                  className="copy-options-button"
                  className={`copy-options-button ${
                    preference.copyAs === "TeX"
                      ? "copy-options-button-active"
                      : ""
                  }`}
                  onClick={() => changeCopyPreference(preference.copyAs)}
                >
                  Copy TeX
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
