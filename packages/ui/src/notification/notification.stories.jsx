import React from "react"
import { Notification } from "./notification"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Notification></Notification>
		</div>
	)
}
export const Variant2 = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Notification></Notification>
		</div>
	)
}

export const notificationDisappear = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Notification shouldDisappear={true} disappearAfter={3000}></Notification>
		</div>
	)
}

export default {
	title: "Components/Notifications",
}
