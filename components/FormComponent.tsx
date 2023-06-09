import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  title: string,
  state: string,
  setState: Dispatch<SetStateAction<string>>,
}

const FormComponent: FC<Props> = ({ title, state, setState}) => {
  return (
    <div className="flexStart flex-col w-full gap-[25px]">
        <label className="w-full text-[#3d3d4e]">
        {title}
        </label>
        <input
          type="text"
          placeholder="Flexibble - Dribble Clone"
          required
          value={state}
          className="self-start w-full outline-0 bg-[#F1F4F5] rounded-xl p-[14px]"
          onChange={(e) => setState(e.target.value)}
        />
      </div>
  )
}

export default FormComponent;
