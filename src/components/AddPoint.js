import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

const Form = props => {
  const { pristine, submitting } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      {
        <div>
          <label>場所</label>
          <Field name="platform" component="select">
            <option value="0">上り方面ホーム端</option>
            <option value="1">下り方面ホーム端</option>
            <option value="2">上り方面ホーム端周辺</option>
            <option value="3">下り方面ホーム端周辺</option>
            <option value="4">ホーム中程</option>
            <option value="5">その他</option>
          </Field>

          <label>何番ホーム</label>
          <Field
            name="track"
            component="input"
            type="number"
            placeholder="3"
          />

          <label>レンズ</label>
          <Field name="lens" component="select">
            <option value="0">～70mm</option>
            <option value="1">70mm～200mm</option>
            <option value="2">200mm～</option>
            <option value="3">その他</option>
          </Field>

          <label>キャパシティ</label>
          <Field name="capacity" component="select">
            <option value="0">～2人</option>
            <option value="1">3人～5人</option>
            <option value="2">6人～</option>
            <option value="3">その他</option>
          </Field>

          <label>順光</label>
          <Field name="sun" component="select">
            <option value="0">午前</option>
            <option value="1">正午</option>
            <option value="2">午後</option>
            <option value="3">曇り</option>
            <option value="4">-</option>
          </Field>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              投稿
            </button>
          </div>
        </div>
      }
    </form>
  )
};
export default reduxForm({
  form: "formExample"
})(Form);
