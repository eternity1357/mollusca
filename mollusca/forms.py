# -*- coding: utf-8 -*-
from django import forms


class ContactForm(forms.Form):
    detail = forms.CharField(widget=forms.Textarea)
    detail.widget.attrs.update({'class': 'form-control',
                                'rows': '3',
                                'placeholder': '描述你對網站的需求 Describe your site\'s details'
                                })
    BUDGETS = (('1', '<- NTD $5000'),
               ('2', 'NTD $5000 ~ NTD $10000'),
               ('2', 'NTD $10000 ~ NTD $30000'),
               ('3', '>- NTD $30000'))

    budget = forms.ChoiceField(widget=forms.Select, choices=BUDGETS)
    budget.widget.attrs.update({'class': 'form-control'})

    name = forms.CharField(label='Name')
    name.widget = forms.TextInput(attrs={'class': 'form-control',
                                         'placeholder': 'Your name'
                                         })
    email = forms.EmailField(label='Email')
    email.widget = forms.TextInput(attrs={'class': 'form-control',
                                          'placeholder': 'Your email address'
                                          })
    phone = forms.CharField(label='Phone')
    phone.widget = forms.TextInput(attrs={'class': 'form-control',
                                          'placeholder': 'Your phone number'
                                          })
