import styled from "styled-components";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormInputWrapper>
      <input className="form-input" onChange={handleChange} {...props} />
      {label && (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </FormInputWrapper>
  );
};

export default FormInput;

const FormInputWrapper = styled.div`
  position: relative;
  margin: 45px 0;

  .form-input {
    width: 100%;
    background: var(--color-white);
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid var(--color-grey-3);
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: 16px;
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    font-size: 20px;
    color: var(--color-grey-2);
    font-weight: normal;
    position: absolute;
    top: 10px;
    left: 5px;
    pointer-events: none;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
    }
  }
`;
