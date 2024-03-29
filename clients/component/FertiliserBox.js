import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const orders = [
    {
        number: 1,
        id: 1,
        href: 'https://www.spectracide.com/products/insect-killers/outdoor-insect-killers/spectracide-malathion-insect-spray-concentrate.aspx',
        invoiceHref: '#',
        createdDate: 'Jul 6, 2021',
        createdDatetime: '2021-07-06',
        deliveredDate: 'July 12, 2021',
        deliveredDatetime: '2021-07-12',
        total: '$160.00',
        estimated: '7000L',
        products: [
            {
                id: 1,
                name: 'Malathion',
                description:
                    '',
                href: 'https://www.spectracide.com/products/insect-killers/outdoor-insect-killers/spectracide-malathion-insect-spray-concentrate.aspx',
                price: 'INR 700.00/L',
                imageSrc: 'https://imgs.search.brave.com/nzG-S64gsgvdsMe_Ql6MmjA1DOmwSiI-02a-tnHU5PI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGI5/ZmM1MmUtMWU4Ny00/YjkwLWJlNTctZDU1/ZDZjMTMyMjJlXzEu/MWU3NGRiMWZlYTNm/ODRiODQ5NjJkOGNh/ZmIzNzg5OTMuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY',
                imageAlt:
                    'Malathion',
            },
            // More products...
        ],
    },
    // More orders...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="bg-white">
            <div className="py-6">
                <div className="mt-6">
                    <h2 className="sr-only">Recent orders</h2>
                    <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                        <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                            {orders.map((order) => (
                                <div
                                    key={order.number}
                                    className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                                >
                                    <h3 className="sr-only">
                                        Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                    </h3>

                                    <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                                        <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                                            <div>
                                                <dt className="font-medium text-gray-900">Estimated quantity</dt>
                                                <dd className="mt-1 text-gray-500">{order.estimated}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-medium text-gray-900">Needed on</dt>
                                                <time dateTime={order.createdDatetime}>{order.createdDate}</time>
                                            </div>
                                        </dl>

                                        <Menu as="div" className="relative flex justify-end lg:hidden">
                                            <div className="flex items-center">
                                                <Menu.Button className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Options for order {order.number}</span>
                                                    <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href={order.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    View
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href={order.invoiceHref}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Invoice
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                        <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                                            <a
                                                href={order.href}
                                                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span>View Order</span>
                                                <span className="sr-only">{order.number}</span>
                                            </a>
                                            <a
                                                href={order.invoiceHref}
                                                className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span>View Invoice</span>
                                                <span className="sr-only">for order {order.number}</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Products */}
                                    <h4 className="sr-only">Items</h4>
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {order.products.map((product) => (
                                            <li key={product.id} className="p-4 sm:p-6">
                                                <div className="flex items-center sm:items-start">
                                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                                                        <img
                                                            src={product.imageSrc}
                                                            alt={product.imageAlt}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="ml-6 flex-1 text-sm">
                                                        <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                                            <h5>{product.name}</h5>
                                                            <p className="mt-2 sm:mt-0">{product.price}</p>
                                                        </div>
                                                        <p className="hidden text-gray-500 sm:mt-2 sm:block">{product.description}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-6 sm:flex sm:justify-between">
                                                    <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                                                        <div className="flex flex-1 justify-center">
                                                            <a
                                                                href={product.href}
                                                                className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                View product
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
