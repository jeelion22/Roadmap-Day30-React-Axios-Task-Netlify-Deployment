import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

function Newuser() {
  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        username: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        address: Yup.object({
          street: Yup.string(),
          suite: Yup.string(),
          city: Yup.string(),
          zipcode: Yup.number(),
          geo: Yup.object({
            lat: Yup.string(),
            lng: Yup.string(),
          }),
        }),
        phone: Yup.string().required("Required"),
        website: Yup.string(),
        company: Yup.object({
          name: Yup.string(),
          catchPhrase: Yup.string(),
          bs: Yup.string(),
        }),
      })}
    >
      {(formik) => (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="text-center mt-3 mb-3">New User Registration</h3>
              <form action="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    {...formik.getFieldProps("name")}
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="john"
                    {...formik.getFieldProps("username")}
                  />

                  <label for="floatingInput">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Johndoe@email.com"
                    {...formik.getFieldProps("email")}
                  />
                  <label for="floatingInput">Email</label>
                </div>

                <div className="row gap-1">
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="address.street"
                        placeholder=""
                        {...formik.getFieldProps("address.street")}
                      />
                      <label for="floatingInput">Street</label>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="address.suite"
                        placeholder=""
                        {...formik.getFieldProps("address.suite")}
                      />
                      <label for="floatingInput">Suite</label>
                    </div>
                  </div>
                </div>

                <div className="row gap-2">
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="address.city"
                        placeholder=""
                        {...formik.getFieldProps("address.city")}
                      />
                      <label for="floatingInput">City</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="address.zipcode"
                        placeholder=""
                        {...formik.getFieldProps("address.zipcode")}
                      />
                      <label for="floatingInput">Zipcode</label>
                    </div>
                  </div>
                </div>

                <div className="row gap-2">
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="geo.lat"
                        placeholder=""
                        {...formik.getFieldProps("geo.lat")}
                      />
                      <label for="floatingInput">Latitude</label>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="geo.lng"
                        placeholder=""
                        {...formik.getFieldProps("geo.lng")}
                      />
                      <label for="floatingInput">Longitude</label>
                    </div>
                  </div>
                </div>

                <div className="row gap-2">
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder=""
                        {...formik.getFieldProps("phone")}
                      />
                      <label for="floatingInput">Phone</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="website"
                        placeholder=""
                        {...formik.getFieldProps("website")}
                      />
                      <label for="floatingInput">Website</label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="company.name"
                    placeholder=""
                    {...formik.getFieldProps("company.name")}
                  />
                  <label for="floatingInput">Company Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="company.catchPhrase"
                    placeholder=""
                    {...formik.getFieldProps("company.catchPhrase")}
                  />
                  <label for="floatingInput">Company Catchphrase</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="company.bs"
                    placeholder=""
                    {...formik.getFieldProps("company.bs")}
                  />
                  <label for="floatingInput">
                    Company Business Strategy (BS)
                  </label>
                </div>
                <div className="row justify-content-center mb-3">
                  <div className="col-md-2">
                    <button type="button" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Newuser;
