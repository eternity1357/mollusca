from django.shortcuts import render
from django.http import HttpResponseRedirect
from mollusca.forms import ContactForm

IE_USER_AGENT = ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0']


def home(request):
    if request.META['HTTP_USER_AGENT'].split("; ")[1] in IE_USER_AGENT:
        return render(request, 'ie.html')
    return render(request, 'home.html')


def ajax_contact(request):
    if request.method == 'POST':
        form = ContactForm(data=request.POST)
        if form.is_valid():
            print("form is valid")
            detail = form.cleaned_data['detail']
            budget = form.cleaned_data['budget']
            budget = form.BUDGETS[int(budget) - 1][1]
            name = form.cleaned_data['name']
            phone = form.cleaned_data['phone']
            email = form.cleaned_data['email']

            subject = '%s needs our help!' % name
            message = ('Consumer\'s Name:\n\t%s\n\n' % name)
            message += ('Consumer\'s Phone Number:\n\t%s\n\n' % phone)
            message += ('How much money they can afford:\n\t%s\n\n' % budget)
            message += ('What they want us to do?\n\t%s\n' % detail)
            sender = email
            recipients = ['contact@mollusca.cc',
                          'cjhwong@gmail.com',
                          'eternity1357@gmail.com',
                          'sonic.tw.tp@gmail.com',
                          ]

            from django.core.mail import send_mail
            send_mail(subject, message, sender, recipients)
            return HttpResponseRedirect('/')
        return HttpResponseRedirect('/')
    else:
        form = ContactForm()

    return render(request, 'contact.html', {
        'form': form})
