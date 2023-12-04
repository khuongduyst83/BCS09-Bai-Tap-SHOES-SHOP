import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;
    // console.log(item);
    return (
      <div className="max-w-sm bg-zinc-200 border border-gray-200 rounded-lg shadow bg-zinc-200 dark:border-gray-700 hover:bg-slate-300  hover:dark:bg-slate-700  duration-500">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block text-left text-white"
          type="button"
          onClick={() => {
            setStateModal(item.id);
          }}
        >
          <img className="rounded-t-lg duration-500" src={item.image} alt />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 h-10 ">
              {item.name}
            </h5>

            <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
              $ {item.price}
            </p>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {item.shortDescription}
            </p>
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => {
                setStateModal(item.id);
              }}
            >
              Add to Carr <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </button>
      </div>
    );
  }
}
