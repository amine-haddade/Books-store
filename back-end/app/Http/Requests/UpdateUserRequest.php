<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'max:30|min:4|sometimes',
            'email'=>'sometimes|email|unique:users,email,'.$this->route('user')->id,
            'password'=>'sometimes|confirmed',
            'photo'=>'file|nullable',
            'role'=>'in:user,admin'

        ];
    }
}
