import { useState } from 'react';
import type { FormEvent } from 'react';
import { PageContainer } from '../components/PageContainer';
import { TabbedParagraph } from '../components/TabbedParagraph';

export const Contact = () => {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
	const [errorText, setErrorText] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [messageCount, setMessageCount] = useState(0);
	const [nameTouched, setNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);

	const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	const showNameError = nameTouched && name.trim().length === 0;
	const showEmailError = emailTouched && (email.trim().length === 0 || !emailIsValid);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus('sending');
		setErrorText('');
		setNameTouched(true);
		setEmailTouched(true);

		if (name.trim().length === 0 || email.trim().length === 0 || !emailIsValid) {
			setStatus('error');
			setErrorText('Please complete the required name and email fields before submitting.');
			return;
		}

		try {
			const response = await fetch('https://formsubmit.co/ajax/qgbtherapy@gmail.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					subject: subject.trim(),
					message: message.trim(),
					_captcha: 'false',
					_template: 'table',
					_subject: 'Website Contact Form',
				}),
			});

			const result = (await response.json()) as { success?: string; message?: string };

			if (!response.ok) {
				throw new Error('Unable to send right now. Please try again shortly.');
			}

			if (result.success !== 'true') {
				throw new Error(
					result.message ??
						'This form needs activation. Please check the FormSubmit activation email.',
				);
			}

			const formElement = event.currentTarget;
			if (formElement) {
				formElement.reset();
			}

			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
			setMessageCount(0);
			setNameTouched(false);
			setEmailTouched(false);
			setStatus('sent');
		} catch (error) {
			setStatus('error');
			setErrorText(error instanceof Error ? error.message : 'Unable to send the message.');
		}
	}

	return (
		<PageContainer pageTitle='Contact Dr. Bailey and Associates' showContactButton={false}>
			<TabbedParagraph content={'To schedule a free 30-minute consultation or for other questions and inquiries, please contact us via phone, email, or the contact form below. We do our best to return messages within 24 business hours.'}/>

			<h4>Information</h4>
			<h5>Phone: 737-900-3680</h5>
			<h5>Email: qgbtherapy@gmail.com</h5>

			<h4>Contact Form</h4>
			<div className='c-full'>
				<form className='contact-form' onSubmit={handleSubmit} noValidate>
					<label htmlFor='name'>Name *</label>
					<input
						id='name'
						name='name'
						autoComplete='name'
						required
						value={name}
						onChange={(event) => setName(event.currentTarget.value)}
						onBlur={() => setNameTouched(true)}
						className={showNameError ? 'input-error' : ''}
						aria-invalid={showNameError}
					/>

					<label htmlFor='email'>Email *</label>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						value={email}
						onChange={(event) => setEmail(event.currentTarget.value)}
						onBlur={() => setEmailTouched(true)}
						className={showEmailError ? 'input-error' : ''}
						aria-invalid={showEmailError}
					/>

					<label htmlFor='subject'>Subject</label>
					<input
						id='subject'
						name='subject'
						value={subject}
						onChange={(event) => setSubject(event.currentTarget.value)}
					/>

					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						rows={7}
						maxLength={1000}
						value={message}
						onChange={(event) => {
							const nextValue = event.currentTarget.value;
							setMessage(nextValue);
							setMessageCount(nextValue.length);
						}}
					/>
					<div className='message-count-row'>
						<span className='message-count'>{messageCount}/1000</span>
					</div>

					<button type='submit' className='button' disabled={status === 'sending'}>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>

					<p className='required-note'>* Required</p>

					<p className='form-note' role='status' aria-live='polite'>
						{status === 'sent' && 'Message sent successfully. Thank you for reaching out.'}
						{status === 'error' && errorText}
					</p>
				</form>
			</div>
		</PageContainer>
	);
};