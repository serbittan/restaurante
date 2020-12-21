import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Formik y Yup nos ayudan a validar, leer campos y mostrar errores de forma fácil y ordenada
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { FirebaseContext } from '../../firebase'
import { setFormMeal } from '../../logic'


const NewMeal = () => {
    // State local de las imágenes.
    const [uploading, setuploading] = useState(false)
    const [progress, setprogress] = useState(0)
    const [urlimage, setUrlimage] = useState('')



    // context con las operaciones de firebase.
    // const FirebasesContext = useContext(FirebaseContext)
    // const { firebase } = FirebasesContext
    const { firebase } = useContext(FirebaseContext)

    // Para navegación. (router-dom v6 sería useNavigate)
    const history = useHistory()


    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            category: '',
            image: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name of meal must be 3 caracters or more')
                .required('Name meal is required'),
            price: Yup.number()
                .min(1, 'Price must be one number or more')
                .required('Price is required'),
            category: Yup.string()
                .required('Category is required'),
            description: Yup.string()
                .min(10, 'Must be 10 caracter or more')
                .required('Description is required')

        }),
        onSubmit: async data => {
            // si le quiero añadir un boolean para en el caso de que el platillo no este disponible...
            data.stock = true
            data.image = urlimage
            try {
                // añadimos a la db.
                await setFormMeal(data)

                history.push('/menu')

            } catch (error) {
                console.log(error)
            }

        }
    })

    // Functions para subir imágenes al storage.
    const handleUpload = (event) => {
        const file = event.target.files[0]

        const storageRef = firebase.storage.ref(`/products/${file.name}`)

        const task = storageRef.put(file)

        task.on('state_changed', snapshot => {
            setuploading(true)
            let percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log('subiendo' + percentage + '%')
            setprogress(percentage)
        }, error => {
            console.log(error.message)
            setuploading(false)
        },
            () => {
                setprogress(100)
                task.snapshot.ref.getDownloadURL().then(url => {
                    console.log(url)
                    setuploading(false)

                    setUrlimage(url)
                })
            })

    }



    return (
        <>
            <h1 className="text-3xl font-light mb-4">Add Meal</h1>

            <div className="flex justify-center mt-10 ml-20">
                <div className="w-full max-w-3xl">

                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Name meal"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        {formik.touched.name && formik.errors.name ? (
                            < div className="bg-red-200 text-red-600 border-l-4 border-red-500 p-2 mb-2" role={'alert'}>
                                <p className="text-red-600 font-bold">Was a Mistake:</p>
                                <p>{formik.errors.name}</p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="€ 20"
                                min="0"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        {formik.touched.price && formik.errors.price ? (
                            < div className="bg-red-200 text-red-600 border-l-4 border-red-500 p-2 mb-2" role={'alert'}>
                                <p className="text-red-600 font-bold">Was a Mistake:</p>
                                <p>{formik.errors.price}</p>
                            </div>
                        ) : null}


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="category"
                                id="category"
                                onChange={formik.handleChange}
                                value={formik.values.category}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">--Select--</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="drinks">Drinks</option>
                                <option value="salads">Salads</option>
                            </select>
                        </div>

                        {formik.touched.category && formik.errors.category ? (
                            < div className="bg-red-200 text-red-600 border-l-4 border-red-500 p-2 mb-2" role={'alert'}>
                                <p className="text-red-600 font-bold">Was a Mistake:</p>
                                <p>{formik.errors.category}</p>
                            </div>
                        ) : null}


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>

                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                type="file"
                                name='name'
                                onChange={handleUpload}
                                value={formik.values.image}
                                onBlur={formik.handleBlur}
                            />

                        </div>

                        {/* para la barra de progreso */}
                        {uploading && (
                            <div className="h-12 relative w-full border">
                                {/* código final para que el progreso llene toda la barra de estado */}
                                <div className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center rounded" style={{ width: `${progress}%` }}>
                                    {progress} %
                                </div>
                            </div>
                        )}

                        {/* mensaje de afirmación */}
                        {urlimage && (
                            <p className="bg-green-500 text-white p-3 text-center my-5 rounded">
                                Image uploaded correctly
                            </p>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                id="description"
                                placeholder="Meal description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                onBlur={formik.handleBlur}
                            ></textarea>
                        </div>

                        {formik.touched.description && formik.errors.description ? (
                            < div className="bg-red-200 text-red-600 border-l-4 border-red-500 p-2 mb-2" role={'alert'}>
                                <p className="text-red-600 font-bold">Was a Mistake:</p>
                                <p>{formik.errors.description}</p>
                            </div>
                        ) : null}

                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Add Meal"
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default NewMeal