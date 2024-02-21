import Header from "../../components/Header";
import "./Flasks.css";
import ResultBox from "../../components/ResultBox";
import React, {useContext, useEffect} from "react";
import FlaskModList from "../../components/FlaskModList";
import {flaskPrefix, flaskSuffix} from "../../generated/GeneratedFlaskMods";
import {loadSettings, saveSettings} from "../../utils/LocalStorage";
import {Checkbox} from "../vendor/Vendor";
import {generateFlaskOutput, minItemLevel} from "../../utils/FlaskOuput";
import {defaultSettings, FlaskSettings} from "../../utils/SavedSettings";
import {ProfileContext} from "../../components/profile/ProfileContext";


const Flasks = () => {
  const {globalProfile} = useContext(ProfileContext);
  const profile = loadSettings(globalProfile);
  const modGroups = flaskPrefix.concat(flaskSuffix).map((modGroup) => modGroup.description);
  const [selectedPrefix, setSelectedPrefix] = React.useState<string[]>(profile.flask.selectedPrefix.filter((v: string) => modGroups.includes(v)));
  const [selectedSuffix, setSelectedSuffix] = React.useState<string[]>(profile.flask.selectedSuffix.filter((v: string) => modGroups.includes(v)));
  const [ilevel, setIlevel] = React.useState<string>(profile.flask.ilevel);
  const [onlyMaxPrefixTierMod, setOnlyMaxPrefixTierMod] = React.useState(profile.flask.onlyMaxPrefixTierMod);
  const [onlyMaxSuffixTierMod, setOnlyMaxSuffixTierMod] = React.useState(profile.flask.onlyMaxPrefixTierMod);
  const [matchBothPrefixAndSuffix, setMatchBothPrefixAndSuffix] = React.useState(profile.flask.matchBothPrefixAndSuffix);
  const [ignoreEffectTiers, setIgnoreEffectTiers] = React.useState(profile.flask.ignoreEffectTiers);
  const [matchOpenPrefixSuffix, setMatchOpenPrefixSuffix] = React.useState(profile.flask.matchOpenPrefixSuffix);

  let [minIlevel, setMinIlevel] = React.useState<string | undefined>(undefined);
  let [result, setResult] = React.useState("");

  useEffect(() => {
    const settings: FlaskSettings = {
      selectedPrefix,
      selectedSuffix,
      ilevel,
      onlyMaxPrefixTierMod,
      onlyMaxSuffixTierMod,
      matchBothPrefixAndSuffix,
      ignoreEffectTiers,
      matchOpenPrefixSuffix,
    }
    let allMods = flaskPrefix.concat(flaskSuffix);
    let search = generateFlaskOutput(allMods, settings);
    saveSettings({
      ...profile,
      flask: settings,
    });
    setResult(search);
    setMinIlevel(minItemLevel(allMods, settings));
  }, [result, selectedPrefix, selectedSuffix, ilevel, onlyMaxPrefixTierMod, onlyMaxSuffixTierMod, matchBothPrefixAndSuffix, ignoreEffectTiers, matchOpenPrefixSuffix, profile]);

  return (
    <>
      <Header text={"Flask Modifiers"}/>
      <ResultBox result={result} warning={minIlevel} reset={() => {
        setSelectedPrefix(defaultSettings.flask.selectedPrefix);
        setSelectedSuffix(defaultSettings.flask.selectedSuffix);
        setIlevel(defaultSettings.flask.ilevel);
        setOnlyMaxPrefixTierMod(defaultSettings.flask.onlyMaxSuffixTierMod);
        setOnlyMaxSuffixTierMod(defaultSettings.flask.onlyMaxSuffixTierMod);
        setMatchBothPrefixAndSuffix(defaultSettings.flask.matchBothPrefixAndSuffix);
        setIgnoreEffectTiers(defaultSettings.flask.ignoreEffectTiers);
        setMatchOpenPrefixSuffix(defaultSettings.flask.matchOpenPrefixSuffix);
      }}/>
      <div className="break"/>
      <div className="full-size generic-top-element">
        <label className="modifier-search-label" htmlFor="quantity">Flask item level</label>
        <input type="search" className="modifier-quantity-box" id="quantity" name="search-mod"
               value={ilevel}
               onChange={v => setIlevel(v.target.value)}/>
        <Checkbox label="Require that both prefix and suffix matches" value={matchBothPrefixAndSuffix}
                  onChange={setMatchBothPrefixAndSuffix}/>
        <Checkbox label="Match open prefix or open suffix" value={matchOpenPrefixSuffix}
                  onChange={setMatchOpenPrefixSuffix}/>
        <Checkbox label="Ignore tier for increased effect flasks (useful when rolling flasks for Mageblood)"
                  value={ignoreEffectTiers}
                  onChange={setIgnoreEffectTiers}/>
      </div>
      <div className="break"/>

      <div className="eq-col-2">
        <div className="flask-checkbox-padding">
          <div className="column-header">Prefix</div>
          <Checkbox label="Only match prefix with the highest ilevel" value={onlyMaxPrefixTierMod}
                    onChange={setOnlyMaxPrefixTierMod}/>
        </div>
        <FlaskModList id="flask-prefix" mods={flaskPrefix} onlyMaxTierMod={onlyMaxPrefixTierMod} ilevel={ilevel}
                      selected={selectedPrefix} setSelected={setSelectedPrefix}/>
      </div>
      <div className="eq-col-2">
        <div className="flask-checkbox-padding">
          <div className="column-header">Suffix</div>
          <Checkbox label="Only match suffix with the highest ilevel" value={onlyMaxSuffixTierMod}
                    onChange={setOnlyMaxSuffixTierMod}/>
        </div>
        <FlaskModList id="flask-suffix" mods={flaskSuffix} onlyMaxTierMod={onlyMaxSuffixTierMod} ilevel={ilevel}
                      selected={selectedSuffix} setSelected={setSelectedSuffix}/>
      </div>
    </>
  )
}

export default Flasks;