import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import '../styles/formproducts.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories, addProducts, getAllProducts, getCategories } from '../redux/actions';
import AddCategory from './ModalCategory';


export function validate(input){
  let errores = {}
  if(!input.name) errores.name = 'Name is required'
  if(!input.images) errores.images = 'Images is required'
  if(!input.price) errores.price = 'Price is required'
  if(!input.categories.length) errores.categories = 'Categories is required'
  return errores
}

function FormProduct() {
  const dispatch = useDispatch()
  const categorías = useSelector(state=>state.categories)
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    description: '',
    stock: 1,
    images: '',
    price: '',
    categories: []
  })
  const [categories, setCategories] = useState({
    IT: false,
    Food: false,
    Tech: false
  })
  const handleInput = (e)=>{
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
  }
  const handleCheckbox = (e)=>{
    setCategories({
        ...categories,
        [e.target.value] : e.target.checked
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(Object.values(input).includes('')) return alert('Complete the fields required')
    if(Object.keys(errors).length) return alert('Complete the fields required')
    dispatch(addProducts(input)) && alert('Producto creado')
    dispatch(getAllProducts())
  }

  useEffect(()=>{
    const categoriesFiltered = Object.keys(categories).filter(x=>categories[x])
    setInput({
        ...input,
        categories: categoriesFiltered
    })
  }, [categories])

  useEffect(()=>{
    dispatch(addCategories({categories: Object.keys(categories)}))
    dispatch(getCategories())
  }, [])
  return (
    <section id='form-add-products'>
        <Form onSubmit={handleSubmit}>
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control name="name" value={input.name} type="text" placeholder="Name" onChange={handleInput}/>
                </FloatingLabel>{errors.name && <p>{errors.name}</p>}
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="stock">
                <Form.Control name='stock' value={input.stock} type="number" placeholder="stock" min="1" max="5" onChange={handleInput}/>
                </FloatingLabel>
            </Col>
        </Row>
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Image_URL">
                <Form.Control name='images' value={input.images} type="text" placeholder="Image_URL" onChange={handleInput}/>
                </FloatingLabel>{errors.images && <p>{errors.images}</p>}
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Price">
                <Form.Control name='price' type="number" value={input.price} placeholder="Price" min="1" onChange={handleInput}/>
                </FloatingLabel>{errors.price && <p>{errors.price}</p>}
            </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check checked={categories.IT} onChange={handleCheckbox} value='IT' type="checkbox" label="IT" />
            <Form.Check checked={categories.Food} onChange={handleCheckbox} value='Food' type="checkbox" label="Food" />
            <Form.Check checked={categories.Tech} onChange={handleCheckbox} value='Tech' type="checkbox" label="Tech" />
            <button class="icon-btn add-btn">
                <div class="add-icon"></div>
                <div class="btn-txt">Add Category</div>
            </button>
            {/* <AddCategory/> */}
        </Form.Group>
        <FloatingLabel className="g-2" controlId="floatingInputGrid" label="Description">
                <Form.Control id='text-form' name='description' value={input.description} as="textarea" placeholder="Description" rows={3} onChange={handleInput}/>
        </FloatingLabel>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </section>
  );
}

export default FormProduct;