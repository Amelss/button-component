import React from 'react'
import Button from './Button'

export default function ButtonDisplayPage() {
  return (
    <div className="ml-3 md:ml-20 mt-10 font-notoSans">
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
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            &:hover, &:focus
          </p>
          <div className="bg-hoverBlue text-textBlue py-2 px-4 rounded-lg text-[14px] w-20">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-sm items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {"<Button disableShadow />"}
          </p>
          <div className="bg-textBlue py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="block md:flex justify-between max-w-md items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button variant="outline"/>'}
          </p>
          <div className="bg-grey text-disabledGrey py-2 px-4 rounded-lg text-[14px] w-24 text-center">
            <Button text="Disabled" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button variant="text" disabled"/>'}
          </p>
          <div className="text-disabledGrey py-2 px-4 rounded-lg text-[14px] w-24 pl-1">
            <Button text="Disabled" />
          </div>
        </div>
      </div>

      <div className="block md:flex justify-between max-w-xl items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button startIcon="local grocery store" />'}
          </p>
          <div className="py-2 px-4 rounded-lg bg-textBlue  text-white text-[14px] w-24 pl-1">
            <div className="flex items-center px-2">
              <span className="material-icons text-[14px] mr-2">
                add_shopping_cart
              </span>
              <Button text="Default" />
            </div>
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button endIcon="local grocery store" />'}
          </p>
          <div className="bg-textBlue text-white  py-2 px-4 rounded-lg text-[14px] w-24">
            <div className="flex items-center">
              <Button text="Default" />
              <span className="material-icons text-[14px] text-white ml-2">
                add_shopping_cart
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:flex justify-between max-w-lg items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey mb-3 tracking-wide font-ubuntu">
            {'<Buttons size="sm"/>'}
          </p>
          <div className="bg-textBlue py-2 px-2 rounded-lg shadow-md text-white text-[12px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button size="md"/>'}
          </p>
          <div className="bg-textBlue py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-1 tracking-wide font-ubuntu">
            {'<Button size="lg" />'}
          </p>
          <div className="bg-textBlue py-3 px-5 rounded-lg shadow-md text-white text-[14px] w-24 text-center">
            <Button text="Default" />
          </div>
        </div>
      </div>

      <div className="block md:flex justify-between max-w-4xl items-center my-10">
        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button color="default" />'}
          </p>
          <div className="bg-grey py-2 px-4 rounded-lg shadow-md text-textGrey text-[14px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button color="primary" />'}
          </p>
          <div className="bg-textBlue py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button color="secondary" />'}
          </p>
          <div className="bg-secondary py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-28 text-center">
            <Button text="Secondary" />
          </div>
        </div>

        <div>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            {'<Button color="danger" />'}
          </p>
          <div className="bg-danger py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Danger" />
          </div>
        </div>
      </div>

      <div className="block md:flex justify-between max-w-3xl items-center my-10">
        <div className='md:mb-7'>
          <p className="text-[12px] text-textLightGrey my-2 tracking-wide font-ubuntu">
            &:hover, &:focus
          </p>
          <div className="bg-hoverGrey py-2 px-4 rounded-lg shadow-md text-textGrey text-[14px] w-20 text-center my-2">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <div className="bg-darkBlue py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center my-2">
            <Button text="Default" />
          </div>
        </div>

        <div>
          <div className="bg-hoverSecondary py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-28 text-center my-2">
            <Button text="Secondary" />
          </div>
        </div>

        <div>
          <div className="bg-hoverDanger py-2 px-4 rounded-lg shadow-md text-white text-[14px] w-20 text-center">
            <Button text="Danger" />
          </div>
        </div>
      </div>
    </div>
  );
}
