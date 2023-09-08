import PropTypes from 'prop-types';

export default function ProductForm({ product }) {
  return (
    <form>
      <div>
        <label htmlFor='title'>نام</label>
        <input
          type='text'
          id='title'
          name='title'
          required
          defaultValue={product ? product.title : ''}
        />
      </div>

      <div>
        <label htmlFor='price'>قیمت</label>
        <input
          type='number'
          id='price'
          name='price'
          required
          defaultValue={product ? product.price : ''}
        />
      </div>

      <div>
        <label htmlFor='description'>توضیحات</label>
        <textarea
          id='description'
          name='description'
          required
          defaultValue={product ? product.description : ''}
          rows={10}
        />
      </div>

      <div>
        <label htmlFor='imageUrl'>آدرس عکس</label>
        <input
          type='url'
          id='imageUrl'
          name='imageUrl'
          required
          defaultValue={product ? product.imageUrl : ''}
        />
      </div>

      <button type='submit'>ثبت</button>
    </form>
  );
}

ProductForm.propTypes = {
  product: PropTypes.object,
  method: PropTypes.string,
};
