import * as React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { RouteComponentProps, Link } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { InjectedFormProps, reset } from "redux-form";
import {
  AlertType,
  Field as ModelField,
  ChangePasswordViewModel
} from "../../models";
import { ApplicationState } from "../../store";
import * as AccountState from "../../store/Account";
import * as AlertState from "../../store/Alert";
import * as SessionState from "../../store/Session";
import LoadingRoute from "../Common/LoadingRoute";
const AsyncChangePasswordForm = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ChangePasswordForm" */ "../Account/ChangePasswordForm"),
  modules: ["../Account/ChangePasswordForm"],
  webpack: () => [require.resolveWeak("../Account/ChangePasswordForm")],
  loading: LoadingRoute
});

type ChangePasswordProps = AccountState.AccountState & {
  accountActions: typeof AccountState.actionCreators;
  alertActions: typeof AlertState.actionCreators;
  sessionActions: typeof SessionState.actionCreators;
} & RouteComponentProps<{}>;

interface AdditionalProps {
  onCancel: () => void;
  fields: ModelField[];
  formButton?: string;
}

type FormProps = InjectedFormProps & AdditionalProps;

export class ChangePassword extends React.Component<
  ChangePasswordProps,
  FormProps
> {
  render() {
    return (
      <div className="container pt-4">
        <div className="row justify-content-center pt-4">
          <div className="col-12 col-sm-8 col-lg-7">
            <h2 className="text-center display-4">Change Password.</h2>
            <AsyncChangePasswordForm
              form="registerForm"
              enableReinitialize={true}
              onSubmit={(values: ChangePasswordViewModel, dispatch) => {
                this.props.accountActions.changePassword(
                  values,
                  () => {
                    this.props.history.push("/");
                    this.props.alertActions.sendAlert(
                      "Password has been changed successfully!",
                      AlertType.success,
                      true
                    );
                    dispatch(reset("changePasswordForm"));
                    this.props.sessionActions.loadToken();
                  },
                  error => {
                    this.props.alertActions.sendAlert(
                      error.error_description,
                      AlertType.danger,
                      true
                    );
                  }
                );
              }}
                    />
                    <p><Link to="/account">Go back</Link></p>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.account, // Selects which state properties are merged into the component's props
  (
    dispatch:
      | Dispatch<AccountState.AccountState>
      | Dispatch<AlertState.AlertState>
      | Dispatch<SessionState.SessionState>
  ) => {
    // Selects which action creators are merged into the component's props
    return {
      accountActions: bindActionCreators(AccountState.actionCreators, dispatch),
      alertActions: bindActionCreators(AlertState.actionCreators, dispatch),
      sessionActions: bindActionCreators(SessionState.actionCreators, dispatch)
    };
  }
)(ChangePassword) as typeof ChangePassword;
