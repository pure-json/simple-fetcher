import RedirectButton from "../../../UI/Buttons/RedirectButton";

import "./WorkspaceHeader.scss";

function WorkspaceHeader() {
	return (
		<>
			<div className={"header"}>
				<RedirectButton
					redirectPath="/home"
					content={"Back to main page"}
					buttonStyle="secondary"
				/>
			</div>
		</>
	);
}

export default WorkspaceHeader;
