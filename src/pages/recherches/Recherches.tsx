import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react';
import './Recherches.css';
import './../../styles/pages.css';
// import Header from "../../components/Header";

const Recherches = () => {

  const [result, setResult] = React.useState("");
  const [warning, setWarning] = React.useState<string | undefined>();


  useEffect(() => {
    
    });

  return (
    <>
      <div className="break"/>
      <div className="vendor-wrapper">
        <div className="eq-col-3">
          <div className="column-header">Recherches colors (3L)</div>
          
        </div>
        <div className="eq-col-3">
          <div className="column-header small-padding">Recherches colors (2L)</div>
        </div>
      </div>

      <div className="break"/>
    </>
  )
}


interface CheckboxProps {
  label: string
  value: boolean
  onChange: Dispatch<SetStateAction<boolean>>
  className?: string
}

interface LinkCheckboxProps {
  label: string
  link?: string
  value: boolean
  onChange: Dispatch<SetStateAction<boolean>>
  className?: string
}

interface NumberInputProps {
  label: string
  value: number | undefined
  image?: string
  onChange: Dispatch<SetStateAction<number | undefined>>
  className?: string
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={props.className}>
      <label className="checkbox checkbox-text">
        <input className="checkbox-input" type="checkbox" checked={props.value}
               onChange={e => props.onChange(e.target.checked)}/>
        <span>{props.label}</span>
      </label>
    </div>
  );
}

const SocketCheckbox = (props: LinkCheckboxProps) => {
  const els = props.link?.split("") ?? props.label.split("");

  return (
    <div className={props.className}>
      <label className="checkbox">
      </label>
    </div>
  );
}

export const NumberInput = (props: NumberInputProps) => {
  return (
    <label className="numberinput">
      <input className="numberinput-input" placeholder="0" type="number" min="0" max="6" value={props.value}
             onChange={e => {
               const number = Number(e.target.value);
               number === 0 ? props.onChange(undefined) : props.onChange(number)
             }}/>
      {props.label && <span>&nbsp;{props.label}</span>}
    </label>
  );
}

function imgFromChar(c: string) {
  switch (c) {
  }
}

export default Recherches;
