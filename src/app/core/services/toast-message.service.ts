import { Injectable } from '@angular/core'
import { MessageService } from 'primeng/api'

@Injectable({
	providedIn: 'root',
})
export class ToastMessageService {
	constructor(private messageService: MessageService) {}
	showSuccess(summary: string, detail: string) {
		this.messageService.add({
			severity: 'woovix',
			summary: summary,
			detail: detail,
			icon: 'pi-thumbs-up',
		})
	}

	showInfo(summary: string, detail: string) {
		this.messageService.add({
			severity: 'woovix',
			summary: summary,
			detail: detail,
			icon: 'pi-info',
		})
	}

	showWarn(summary: string, detail: string) {
		this.messageService.add({
			severity: 'woovix',
			summary: summary,
			detail: detail,
			icon: 'pi-exclamation',
		})
	}

	showError(summary: string, detail: string) {
		this.messageService.add({
			severity: 'woovix',
			summary: summary,
			detail: detail,
			icon: 'pi-thumbs-down',
		})
	}
}
