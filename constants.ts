import type { Theorist } from './types';

export const THEORISTS: Theorist[] = [
  {
    id: 'freud',
    name: 'Sigmund Freud',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/250px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg',
    theoryName: 'Psychoanalytic Theory',
    bio: `
      <!-- EDIT FREUD'S BIOGRAPHY HERE -->
      Born in 1856 in Freiberg, Moravia (now part of the Czech Republic), Sigmund Freud was an Austrian neurologist 
      and the founder of psychoanalysis, a clinical method for treating psychopathology through dialogue 
      between a patient and a psychoanalyst. Freud's work has been both immensely influential and highly controversial,
      leaving a deep mark on psychology, psychiatry, and Western thought.
    `,
    theory: `
      <!-- EDIT FREUD'S THEORY HERE -->
      Freud's theory of personality is centered on the concept of the unconscious mind. 
      He proposed a structural model of the psyche divided into three parts:
      <br><br>
      <strong>Id:</strong> The primitive, instinctual part of the mind that contains sexual and aggressive drives and hidden memories. It operates on the pleasure principle.
      <br>
      <strong>Ego:</strong> The realistic part that mediates between the desires of the id and the super-ego. It operates on the reality principle.
      <br>
      <strong>Superego:</strong> The moral conscience, which incorporates social standards and ideals.
      <br><br>
      He also developed the theory of psychosexual stages (Oral, Anal, Phallic, Latent, Genital), arguing that personality is largely formed by experiences in early childhood.
    `,
  },
  {
    id: 'jung',
    name: 'Carl Jung',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif/lossy-page1-250px-ETH-BIB-Jung%2C_Carl_Gustav_%281875-1961%29-Portrait-Portr_14163_%28cropped%29.tif.jpg',
    theoryName: 'Analytical Psychology',
    bio: `
      <!-- EDIT JUNG'S BIOGRAPHY HERE -->
      Carl Gustav Jung, born in 1875 in Switzerland, was a psychiatrist and psychoanalyst who founded analytical psychology.
      Initially a close collaborator of Freud, Jung's work eventually diverged due to theoretical disagreements.
      His work has been influential in psychiatry, anthropology, archaeology, literature, philosophy, and religious studies.
    `,
    theory: `
      <!-- EDIT JUNG'S THEORY HERE -->
      Jung's analytical psychology introduced several key concepts:
      <br><br>
      <strong>Collective Unconscious:</strong> A layer of the unconscious mind shared by all of humanity, containing archetypes, which are universal, archaic symbols and images.
      <br>
      <strong>Archetypes:</strong> Examples include the Persona (our public mask), the Shadow (the dark side of our personality), Anima/Animus (the inner feminine/masculine), and the Self (the unified consciousness and unconsciousness).
      <br>
      <strong>Psychological Types:</strong> Jung proposed that personality is shaped by attitudes (Introversion vs. Extraversion) and functions (Thinking, Feeling, Sensation, Intuition), which formed the basis for the Myers-Briggs Type Indicator (MBTI).
    `,
  },
  {
    id: 'adler',
    name: 'Alfred Adler',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Alfred_Adler1.png',
    theoryName: 'Individual Psychology',
    bio: `
      <!-- EDIT ADLER'S BIOGRAPHY HERE -->
      Alfred Adler, born in 1870 in Vienna, was an Austrian medical doctor, psychotherapist, and founder of the school of individual psychology.
      He was a core member of the Vienna Psychoanalytic Society, but he was the first major figure to break away from Freud's group to form his own theory.
    `,
    theory: `
      <!-- EDIT ADLER'S THEORY HERE -->
      Adler's individual psychology emphasizes the social context of personality development. Key concepts include:
      <br><br>
      <strong>Striving for Superiority:</strong> Adler believed the primary motivation for humans is to overcome feelings of inferiority and strive for superiority or perfection. This can be expressed in healthy, socially beneficial ways or in destructive, selfish ways.
      <br>
      <strong>Inferiority Complex:</strong> When feelings of inferiority are overwhelming, an individual may develop an inferiority complex, which can lead to neurotic behavior.
      <br>
      <strong>Birth Order:</strong> Adler pioneered the idea that birth order can influence personality. For example, he suggested firstborns are often conservative leaders, while later-born children might be more competitive and rebellious.
    `,
  },
  {
    id: 'horney',
    name: 'Karen Horney',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Karen_Horney_1938.jpg',
    theoryName: 'Psychoanalytic Social Theory',
    bio: `
      <!-- EDIT HORNEY'S BIOGRAPHY HERE -->
      Karen Horney, born in 1885 in Germany, was a psychoanalyst who practiced in the United States during her later career.
      Her theories questioned some traditional Freudian views, particularly his ideas on female psychology.
      She is considered a neo-Freudian and a founder of feminist psychology.
    `,
    theory: `
      <!-- EDIT HORNEY'S THEORY HERE -->
      Horney's theory focused on the impact of "basic anxiety," a feeling of being isolated and helpless in a hostile world. She proposed that individuals develop coping strategies, or "neurotic needs," which can become fixed personality styles:
      <br><br>
      <strong>Moving Toward People (Compliance):</strong> The need for affection and approval.
      <br>
      <strong>Moving Against People (Aggression):</strong> The need for power and control.
      <br>
      <strong>Moving Away From People (Detachment):</strong> The need for independence and self-sufficiency.
      <br><br>
      A healthy individual flexibly uses all three strategies, while a neurotic person is compulsively driven by one.
    `,
  },
  {
    id: 'fromm',
    name: 'Erich Fromm',
    imageUrl: 'https://book-assets.openroadmedia.com/12520202-book-contributor.jpg',
    theoryName: 'Humanistic Psychoanalysis',
    bio: `
      <!-- EDIT FROMM'S BIOGRAPHY HERE -->
      Erich Fromm, born in 1900 in Germany, was a social psychologist, psychoanalyst, sociologist, and humanistic philosopher.
      He was associated with the Frankfurt School of critical theory and emphasized the role of culture and society in shaping personality.
    `,
    theory: `
      <!-- EDIT FROMM'S THEORY HERE -->
      Fromm's humanistic psychoanalysis argues that personality is driven by the need to find an answer to our existence. The central theme is the conflict between human freedom and the loneliness and isolation that freedom can bring. He described five basic human needs:
      <br><br>
      <strong>Relatedness:</strong> The need to connect with others.
      <br>
      <strong>Transcendence:</strong> The need to rise above our animal nature and become creative.
      <br>
      <strong>Rootedness:</strong> The need to feel a sense of belonging.
      <br>
      <strong>Sense of Identity:</strong> The need to be a unique individual.
      <br>
      <strong>Frame of Orientation:</strong> The need for a stable way of perceiving and understanding the world.
    `,
  },
];