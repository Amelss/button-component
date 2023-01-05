import React from 'react'
import Button from './Button'

export default function ButtonDisplayPage() {
  return (
    <div className="ml-20 mt-10 font-notoSans">
      <h1 className="text-3xl tracking-wide text-gray-500 my-10">Buttons</h1>
      <div className="flex justify-between max-w-sm items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {"<Button />"}
          </p>
          <div className="bg-grey py-2 px-4 rounded-lg shadow-md text-textGrey text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            &:hover, &:focus
          </p>
          <div className="bg-hoverGrey py-2 px-4 rounded-lg shadow-md text-textGrey text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-sm items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {'<Button variant="outline"/>'}
          </p>
          <div className="border border-textBlue py-2 px-4 rounded-lg text-textBlue text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            &:hover, &:focus
          </p>
          <div className="bg-hoverBlue border border-textBlue text-textBlue py-2 px-4 rounded-lg  text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-sm items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {'<Button variant="text"/>'}
          </p>
          <div className="py-2 px-4 rounded-lg  text-textBlue text-[14px] w-20 pl-1">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            &:hover, &:focus
          </p>
          <div className="bg-hoverBlue text-textBlue py-2 px-4 rounded-lg text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-sm items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {"<Button disableShadow />"}
          </p>
          <div className="bg-textBlue py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-md items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {'<Button variant="outline"/>'}
          </p>
          <div className="bg-grey text-disabledGrey py-2 px-4 rounded-lg text-[14px] w-24 text-center">
            <Button text="Disabled" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey mb-2 tracking-wide font-ubuntu">
            {'<Button variant="text" disabled"/>'}
          </p>
          <div className="text-disabledGrey py-2 px-4 rounded-lg text-[14px] w-24 pl-1">
            <Button text="Disabled" />
          </div>
        </div>
      </div>
    </div>
  );
}
