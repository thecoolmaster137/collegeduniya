import * as z from 'zod';

const PartialGetInTouchFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  phoneNumber: z
    .string()
    .min(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .max(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .regex(/^[6-9]\d{9}$/, 'The PhoneNumber must contain numbers'),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  message: z.string().optional(),
});

const CourseLookingForSchema = z.object({
  courseLookingFor: z
    .array(z.string(), {
      required_error: 'You have to select at least one item.',
    })
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
});

const PartialFormDirectAdmissionSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  phoneNumber: z
    .string()
    .min(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .max(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .regex(/^[6-9]\d{9}$/, 'The PhoneNumber must contain numbers'),
  fatherName: z
    .string()
    .min(2, {
      message: 'Father Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Father Name must not be longer than 30 characters.',
    }),
  fatherPhoneNumber: z
    .string()
    .min(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .max(10, {
      message: 'The PhoneNumber must be 10 characters',
    })
    .regex(/^[6-9]\d{9}$/, 'The PhoneNumber must contain numbers'),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  collegePreferedLocation: z.string().min(4, {
    message: 'The College Prefered Location must be atleast 4 characters.',
  }),
  preferedCollege: z.string().optional(),
  tenthScore: z
    .string()
    .min(1, {
      message: 'The Tenth Score must be 1%',
    })
    .max(100, {
      message: 'The Tenth Score must be 100%',
    }),
  twelfthScore: z
    .string()
    .min(1, {
      message: 'The Twelfth Score must be 1%',
    })
    .max(100, {
      message: 'The Twelfth Score must be 100%',
    }),
  yearOfPassing: z
    .string()
    .regex(/^\d{4}$/, 'YearOfPassing must contain numbers'),
  majorSubject: z.enum(['pcb', 'pcm', 'commerce', 'arts', 'any-other'], {
    required_error: 'Please select a major subject.',
    invalid_type_error: 'Select a major subject',
  }),
});

export const GetInTouchFormSchema = PartialGetInTouchFormSchema.merge(
  CourseLookingForSchema
);

export const FormDirectAdmissionSchema = PartialFormDirectAdmissionSchema.merge(
  CourseLookingForSchema
);

export const FormRegisterationSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: 'Name must be at least 2 characters.',
      })
      .max(30, {
        message: 'Name must not be longer than 30 characters.',
      }),
    phoneNumber: z
      .string()
      .min(10, {
        message: 'The PhoneNumber must be 10 characters',
      })
      .max(10, {
        message: 'The PhoneNumber must be 10 characters',
      })
      .regex(/^[6-9]\d{9}$/, 'The PhoneNumber must contain numbers'),
    highestEducationSchema: z.enum(
      ['twelfth', 'graduation', 'postGraduation'],
      {
        required_error: 'Highest Education is required.',
      }
    ),
    email: z
      .string({
        required_error: 'Please select an email to display.',
      })
      .email(),
    preferedCollege: z.string().optional(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string(),
    tenthSchool: z.string().min(4, { message: 'Tenth School is required.' }),
    tenthBoard: z.string().min(3, { message: 'Tenth Board is required.' }),
    tenthScore: z
      .string()
      .min(1, {
        message: 'The Tenth Score must be 1%',
      })
      .max(100, {
        message: 'The Tenth Score must be 100%',
      }),
    tenthYearOfPassing: z
      .string()
      .regex(/^\d{4}$/, 'Tenth YearOfPassing must contain numbers'),
    twelfthScore: z
      .string()
      .min(1, {
        message: 'The Twelfth Score must be 1%',
      })
      .max(100, {
        message: 'The Twelfth Score must be 100%',
      }),
    twelfthYearOfPassing: z
      .string()
      .regex(/^\d{4}$/, 'Twelfth YearOfPassing must contain numbers'),
    fatherName: z
      .string()
      .min(2, {
        message: 'Father Name must be at least 2 characters.',
      })
      .max(30, {
        message: 'Father Name must not be longer than 30 characters.',
      }),
    fatherPhoneNumber: z
      .string()
      .min(10, {
        message: 'The PhoneNumber must be 10 characters',
      })
      .max(10, {
        message: 'The PhoneNumber must be 10 characters',
      })
      .regex(/^[6-9]\d{9}$/, 'The PhoneNumber must contain numbers'),
    city: z.string().min(1, { message: 'City is required.' }),
    fathersOccupation: z
      .string()
      .min(1, { message: "Father's Occupation is required." }),
    annualIncome: z.coerce.number().min(1, {
      message: 'Annual Income is required and should be a positive integer.',
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
