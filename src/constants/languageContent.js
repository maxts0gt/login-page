const inputPropsEnglish = [
  {
    id: 1,
    name: "email",
    placeholder: "email",
    type: "email",
    required: true,
    minLength: 3,
    errorMessage: "Please enter a valid email address",
  },
  {
    id: 2,
    name: "password",
    placeholder: "password",
    type: "password",
    required: true,
    minLength: 6,
    errorMessage: "Password needs to include 6 or more characters.",
  },
];

const inputPropsFrench = [
  {
    ...inputPropsEnglish[0],
    placeholder: "e-mail",
    errorMessage: "S'il vous plaît, mettez une adresse email valide.",
  },
  {
    ...inputPropsEnglish[1],
    placeholder: "le mot de passe",
    errorMessage: "Le mot de passe doit inclure 6 caractères ou plus.",
  },
];

export const languageContent = {
  english: {
    signIn: "Sign in",
    emailSentTitle: "Submission successful",
    emailSentText:
      "A confirmation email will be sent to your mailbox. Please check your email and confirm within an hour.",
    forgotPassword: "Forgot your password?",
    createAccount: "Create an account",
    selectLanguage: "Language",
    english: "English",
    french: "Français",
    help: "Help",
    helpText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente commodi nulla perspiciatis consequatur, in debitis iste dolor illum labore suscipit laborum nesciunt est soluta sunt molestiae voluptate repellendus deleniti praesentium voluptatum officiis accusantium, sequi dolores! Eveniet nemo iusto quisquam! Nihil ea aut odio officiis labore, temporibus consequuntur est. Repellendus esse earum placeat porro, modi ipsa quas repellat fugit inventore.",
    privacy: "Privacy",
    privacyText:
      "At our website, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our Website and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email@Website.com.",
    terms: "Terms",
    termsText:
      "These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website accessible at Website.com. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.",
    notFound: "Page Not Found",
    home: "Welcome",
    homeText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sunt tenetur nemo, odio veritatis doloremque numquam consectetur ipsam voluptates et exercitationem deserunt voluptatum eius mollitia, quaerat maxime. Ab incidunt laborum, corporis labore, culpa tempora repudiandae veritatis porro, quaerat deleniti ullam eius dolores tenetur neque id perferendis doloremque dolor a earum. Praesentium pariatur magnam debitis qui distinctio voluptates quos hic illum?",
    resetPassword: "Reset Password",
    resetPasswordText:
      "Please enter your email address. You will receive a link to create a new password via email.",
    inputProps: inputPropsEnglish,
  },
  french: {
    signIn: "S'identifier",
    emailSentTitle: "Soumission réussie",
    emailSentText:
      "Un e-mail de confirmation sera envoyé sur votre boîte mail. Veuillez vérifier votre e-mail et confirmer dans l'heure.",
    forgotPassword: "Mot de passe oublié?",
    createAccount: "Créer un compte",
    selectLanguage: "La Langue",
    english: "English",
    french: "Français",
    help: "Support",
    helpText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente commodi nulla perspiciatis consequatur, in debitis iste dolor illum labore suscipit laborum nesciunt est soluta sunt molestiae voluptate repellendus deleniti praesentium voluptatum officiis accusantium, sequi dolores! Eveniet nemo iusto quisquam! Nihil ea aut odio officiis labore, temporibus consequuntur est. Repellendus esse earum placeat porro, modi ipsa quas repellat fugit inventore.",
    privacy: "Confidentialité",
    privacyText:
      "Sur notre site Web, accessible sur Website.com, l'une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient des types d'informations qui sont collectées et enregistrées par notre site Web et comment nous les utilisons. Si vous avez des questions supplémentaires ou souhaitez plus d'informations sur notre politique de confidentialité, n'hésitez pas à nous contacter par e-mail à Email@Website.com.",
    terms: "Termes",
    termsText:
      "Ces conditions générales standard du site Web écrites sur cette page Web géreront votre utilisation de notre site Web, site Web accessible sur Website.com. Ces conditions seront pleinement appliquées et affecteront votre utilisation de ce site Web. En utilisant ce site Web, vous acceptez tous les termes et conditions qui y sont écrits. Vous ne devez pas utiliser ce site Web si vous n'êtes pas d'accord avec l'un de ces termes et conditions standard du site Web.",
    notFound: "Page Non Yrouvée",
    home: "Bienvenue",
    homeText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sunt tenetur nemo, odio veritatis doloremque numquam consectetur ipsam voluptates et exercitationem deserunt voluptatum eius mollitia, quaerat maxime. Ab incidunt laborum, corporis labore, culpa tempora repudiandae veritatis porro, quaerat deleniti ullam eius dolores tenetur neque id perferendis doloremque dolor a earum. Praesentium pariatur magnam debitis qui distinctio voluptates quos hic illum?",
    resetPassword: "Réinitialiser le Mot de Passe",
    resetPasswordText:
      "Veuillez saisir votre adresse e-mail. Vous recevrez un lien pour créer un nouveau mot de passe par e-mail.",
    inputProps: inputPropsFrench,
  },
};
