// ============================================================
// QUESTION BANK IMPORT SCRIPT
// ============================================================
// This script runs after the main app is loaded and injects
// the Probability I question bank into the application.
// ============================================================

(function forceLoadQuestionBank() {
    try {
        console.log("📚 Force-loading Probability question bank...");

        // ========== YOUR QUESTIONS ==========
        const MY_QUESTION_BANK = `
 Subject: chemistry 102
Topic: Fundamental Concepts and Ground States
Type: MCQ
Q001: Which of the following electronic configurations represents a carbon atom in its ground state?
Option: A: 1s² 2s² 2p³
Option: B: 1s² 2s¹ 2p³
Option: C: 1s² 2s² 2p²
Option: D: 1s² 2s² 2p⁴
Answer: C
Explanation: Ground state carbon has six electrons in 1s²2s²2p².

Type: MCQ
Q002: Carbon has how many valence electrons?
Option: A: 2
Option: B: 4
Option: C: 3
Option: D: 6
Answer: B
Explanation: Carbon belongs to group 14 with four outer valence electrons.

Type: MCQ
Q003: Carbon is tetravalent because it:
Option: A: Has four neutrons
Option: B: Has four shells
Option: C: Has four protons
Option: D: Forms four covalent bonds
Answer: D
Explanation: Tetravalency refers to forming four covalent chemical bonds.

Type: MCQ
Q004: A covalent bond is formed by:
Option: A: Gain of protons
Option: B: Electron transfer
Option: C: Loss of neutrons
Option: D: Sharing of electrons
Answer: D
Explanation: Covalent bonding involves sharing valence electrons between nonmetal atoms.

Topic: Historical Survey of Organic Chemistry
Type: MCQ
Q005: Which scientist proposed the theory of vital force?
Option: A: Friedrich Wöhler
Option: B: Jöns Jacob Berzelius
Option: C: Dalton
Option: D: Kekulé
Answer: B
Explanation: Berzelius proposed living organisms possess a vital force.

Type: MCQ
Q006: The synthesis of urea by Wöhler in 1828 proved that:
Option: A: Organic compounds can be synthesized from inorganic substances.
Option: B: Carbon is absent in organic compounds.
Option: C: Organic compounds can only be obtained from living organisms.
Option: D: All compounds are organic.
Answer: A
Explanation: Wöhler disproved vitalism by producing organic urea in lab.

Type: MCQ
Q007: Organic chemistry is mainly the study of compounds containing:
Option: A: Nitrogen
Option: B: Oxygen
Option: C: Carbon
Option: D: Sulphur
Answer: C
Explanation: Organic chemistry focus revolves entirely around carbon-based compounds.

Topic: Fullerenes, Nanotubes and Nanochemistry
Type: MCQ
Q008: Fullerene (C60) is popularly called:
Option: A: Diamond
Option: B: Buckminsterfullerene
Option: C: Graphite
Option: D: Graphene
Answer: B
Explanation: C60 molecules are shaped like soccer balls called Buckminsterfullerene.

Type: MCQ
Q009: Carbon nanotubes are known for their:
Option: A: High strength and conductivity
Option: B: Poor electrical conductivity
Option: C: Low melting point
Option: D: High solubility in water
Answer: A
Explanation: Nanotubes possess outstanding mechanical strength and electron conductivity.

Type: MCQ
Q010: Nanotechnology deals with materials in the range of:
Option: A: 1-100 mm
Option: B: 1-100 cm
Option: C: 1-100 nm
Option: D: 1-100 µm
Answer: C
Explanation: Nanoscale operations occur between one and one hundred nanometers.

Topic: Purification and Analytical Techniques
Type: MCQ
Q011: Which method is commonly used to purify a solid organic compound?
Option: A: Recrystallization
Option: B: Chromatography
Option: C: Distillation
Option: D: Filtration
Answer: A
Explanation: Recrystallization isolates pure solids based on temperature solubility differences.

Type: MCQ
Q012: Which method separates liquids with different boiling points?
Option: A: Sublimation
Option: B: Distillation
Option: C: Decantation
Option: D: Evaporation
Answer: B
Explanation: Distillation vaporizes and condenses components based on volatility.

Type: MCQ
Q013: Paper chromatography separates substances based on differences in:
Option: A: Density
Option: B: Hardness
Option: C: Colour
Option: D: Solubility
Answer: D
Explanation: Separation relies on differential solubility between stationary/mobile phases.

Type: MCQ
Q014: Which element is detected by Lassaigne's test?
Option: A: Carbon
Option: B: Oxygen
Option: C: Nitrogen
Option: D: Hydrogen
Answer: C
Explanation: Lassaigne's test chemically detects nitrogen, halogens, and sulfur.

Type: MCQ
Q015: Qualitative analysis is used to determine:
Option: A: Identity of substance
Option: B: Molecular weight
Option: C: Amount of substance
Option: D: Density
Answer: A
Explanation: Qualitative tests establish the elemental identity of unknown groups.

Type: MCQ
Q016: Quantitative analysis determines:
Option: A: Colour
Option: B: Amount present
Option: C: Odour
Option: D: Shape
Answer: B
Explanation: Quantitative tests compute precise mass, amounts, or percentage concentrations.

Topic: Structural Elucidation and Spectroscopy
Type: MCQ
Q017: Which instrument is commonly used to determine molecular structure?
Option: A: Barometer
Option: B: NMR Spectrometer
Option: C: Thermometer
Option: D: Voltmeter
Answer: B
Explanation: NMR maps carbon-hydrogen frameworks to reveal complete structures.

Type: MCQ
Q018: Infrared spectroscopy mainly identifies:
Option: A: Electrons
Option: B: Functional groups
Option: C: Neutrons
Option: D: Atomic number
Answer: B
Explanation: IR monitors vibrational frequencies belonging to specific functional groups.

Type: MCQ
Q019: Mass spectrometry helps determine:
Option: A: Molecular mass
Option: B: Density
Option: C: Melting point
Option: D: Colour
Answer: A
Explanation: Mass spectrometry breaks molecules apart to analyze precise molecular weights.

Topic: Reaction Mechanisms and Intermediates
Type: MCQ
Q020: The homolytic cleavage of a covalent bond results in the formation of:
Option: A: Carbanions
Option: B: Free radicals
Option: C: Carbocations
Option: D: Electrophiles
Answer: B
Explanation: Homolysis gives one electron to each splitting fragment, creating radicals.

Type: MCQ
Q021: Which of the following acts as a nucleophile in organic reactions?
Option: A: BF3
Option: B: NH3
Option: C: AlCl3
Option: D: H+
Answer: B
Explanation: Ammonia has an unshared lone pair eager to donate.

Type: MCQ
Q022: A free radical contains:
Option: A: An unpaired electron
Option: B: A paired electron
Option: C: Two protons
Option: D: No electrons
Answer: A
Explanation: Highly reactive radical species possess a single unpaired electron.

Type: MCQ
Q023: Which reaction proceeds through free radicals?
Option: A: Esterification
Option: B: Neutralization
Option: C: Hydrolysis
Option: D: Chlorination of methane
Answer: D
Explanation: Alkane halogenation goes through initiation, propagation, and radical steps.

Type: MCQ
Q024: An electrophile is an:
Option: A: Proton donor
Option: B: Electron-pair acceptor
Option: C: Electron-pair donor
Option: D: Neutron donor
Answer: B
Explanation: Electrophiles are electron-deficient species seeking negative density pairs.

Type: MCQ
Q025: A nucleophile is an:
Option: A: Catalyst
Option: B: Electron-pair acceptor
Option: C: Proton
Option: D: Electron-pair donor
Answer: D
Explanation: Nucleophiles possess excess electron density available for covalent bonding.

Type: MCQ
Q026: Which particle acts as a nucleophile?
Option: A: OH⁻
Option: B: BF₃
Option: C: H⁺
Option: D: AlCl₃
Answer: A
Explanation: Hydroxide ion carries negative charge with active lone pairs.

Type: MCQ
Q027: Which particle acts as an electrophile?
Option: A: OH⁻
Option: B: Cl⁻
Option: C: H⁺
Option: D: NH₃
Answer: C
Explanation: Hydrogen ion lacks electrons and seeks out electron donors.

Topic: Hydrocarbons (Alkanes, Alkenes, Alkynes)
Type: MCQ
Q028: What is the IUPAC name of the compound CH3-CH(CH3)-CH2-CH3?
Option: A: 2-Methylbutane
Option: B: n-Butane
Option: C: Isobutane
Option: D: 2-Methylpropane
Answer: A
Explanation: Main chain has four carbons with methyl at position two.

Type: MCQ
Q029: The hybridization of carbon atoms in ethene (C2H4) is described as:
Option: A: sp²
Option: B: sp
Option: C: dsp²
Option: D: sp³
Answer: A
Explanation: Double-bonded carbons use three sp² orbitals for planar bonding.

Type: MCQ
Q030: Homologous series are characterized by a consecutive difference of which chemical unit?
Option: A: -C2H5
Option: B: -CH-
Option: C: -CH3
Option: D: -CH2-
Answer: D
Explanation: Adjacent family members differ by one repeating methylene unit.

Type: MCQ
Q031: What is the correct empirical formula of a hydrocarbon containing 80% carbon and 20% hydrogen by mass? (C = 12, H = 1)
Option: A: CH3
Option: B: CH4
Option: C: C2H5
Option: D: CH2
Answer: A
Explanation: Mole ratio calculation results in structural empirical formula CH3.

Type: MCQ
Q032: What is the IUPAC name of CH4?
Option: A: Ethane
Option: B: Methane
Option: C: Butane
Option: D: Propane
Answer: B
Explanation: The simplest saturated hydrocarbon containing one single carbon atom.

Type: MCQ
Q033: The IUPAC name of CH3CH3 is:
Option: A: Butane
Option: B: Propane
Option: C: Ethane
Option: D: Methane
Answer: C
Explanation: Two carbon single-bonded chain is systematically named ethane.

Type: MCQ
Q034: What is the IUPAC name of CH3CH2CH3?
Option: A: Butane
Option: B: Ethene
Option: C: Propane
Option: D: Propene
Answer: C
Explanation: Saturated unbranched three-carbon hydrocarbon chain is named propane.

Type: MCQ
Q035: What is the IUPAC name of CH3CH2CH2CH3?
Option: A: Propane
Option: B: Hexane
Option: C: Pentane
Option: D: Butane
Answer: D
Explanation: Saturated straight-line four-carbon organic structure is called butane.

Type: MCQ
Q036: What is the IUPAC name of CH2=CH2?
Option: A: Ethane
Option: B: Ethyne
Option: C: Ethene
Option: D: Propene
Answer: C
Explanation: Two carbon atoms containing a functional double bond.

Type: MCQ
Q037: What is the IUPAC name of HC≡CH?
Option: A: Ethene
Option: B: Ethyne
Option: C: Propyne
Option: D: Ethane
Answer: B
Explanation: Two carbon chain containing a terminal triple bond system.

Type: MCQ
Q038: Which of the following is the general formula of alkanes?
Option: A: CnH2n-2
Option: B: CnH2nO
Option: C: CnH2n
Option: D: CnH2n+2
Answer: D
Explanation: Alkanes follow open chain hydrogen saturation formula CnH2n+2.

Type: MCQ
Q039: Which of the following is an alkane?
Option: A: Ethene
Option: B: Ethanol
Option: C: Ethyne
Option: D: Ethane
Answer: D
Explanation: Ethane consists purely of single covalent carbon-hydrogen bonds.

Type: MCQ
Q040: What is the IUPAC name of CH3CH2CH2CH2CH3?
Option: A: Butane
Option: B: Hexane
Option: C: Pentane
Option: D: Propane
Answer: C
Explanation: Unbranched straight chain saturated with five total carbon units.

Type: MCQ
Q041: The main reaction of alkanes is:
Option: A: Substitution
Option: B: Addition
Option: C: Polymerization
Option: D: Hydration
Answer: A
Explanation: Saturated bonds undergo free radical substitution, not addition.

Type: MCQ
Q042: Which alkane has the molecular formula C6H14?
Option: A: Hexene
Option: B: Hexane
Option: C: Cyclohexane
Option: D: Hexyne
Answer: B
Explanation: Saturated six-carbon straight chain corresponds to formula name hexane.

Type: MCQ
Q043: What is the IUPAC name of CH3CH(CH3)CH3?
Option: A: 2-Methylpropane
Option: B: Butane
Option: C: 2-Methylbutane
Option: D: Pentane
Answer: A
Explanation: Three carbon chain featuring an attached branched middle methyl.

Type: MCQ
Q044: Which alkane is commonly called isobutane?
Option: A: 2-Methylpropane
Option: B: Pentane
Option: C: Butane
Option: D: Propane
Answer: A
Explanation: Isobutane is the common historical name for 2-methylpropane.

Type: MCQ
Q045: The general formula of alkenes is:
Option: A: CnH2n+2
Option: B: CnH2n-2
Option: C: CnH2n
Option: D: CnH2nO
Answer: C
Explanation: Alkenes carry one double bond, dropping two hydrogens.

Type: MCQ
Q046: What functional group is found in alkenes?
Option: A: Carboxyl group
Option: B: Hydroxyl group
Option: C: Triple bond
Option: D: Double bond
Answer: D
Explanation: Alkenes are defined by carbon-carbon double bond linkages.

Type: MCQ
Q047: What is the IUPAC name of CH3CH=CH2?
Option: A: Propanol
Option: B: Propyne
Option: C: Propene
Option: D: Propane
Answer: C
Explanation: Three carbon skeleton holding one alkene double bond structure.

Type: MCQ
Q048: Which reaction is characteristic of alkenes?
Option: A: Addition
Option: B: Neutralization
Option: C: Precipitation
Option: D: Substitution
Answer: A
Explanation: Unsaturated double bonds easily undergo electrophilic addition reactions.

Type: MCQ
Q049: Addition of hydrogen to an alkene is called:
Option: A: Hydrogenation
Option: B: Hydration
Option: C: Oxidation
Option: D: Halogenation
Answer: A
Explanation: Adding molecular hydrogen across unsaturated double bonds means hydrogenation.

Type: MCQ
Q050: The general formula of alkynes is:
Option: A: CnH2n
Option: B: CnH2nO
Option: C: CnH2n-2
Option: D: CnH2n+2
Answer: C
Explanation: Alkynes follow unsaturated linear hydrocarbon general formula CnH2n-2.

Type: MCQ
Q051: Which compound is an alkyne?
Option: A: Ethane
Option: B: Ethanol
Option: C: Ethene
Option: D: Ethyne
Answer: D
Explanation: Ethyne contains a triple bond belonging to alkynes.

Type: MCQ
Q052: What is the IUPAC name of CH3C≡CH?
Option: A: Propyne
Option: B: Propane
Option: C: Butyne
Option: D: Propene
Answer: A
Explanation: Three-carbon hydrocarbon containing a characteristic terminal triple bond.

Type: MCQ
Q053: Alkynes contain:
Option: A: Single bond only
Option: B: Ionic bond
Option: C: Triple bond
Option: D: Double bond only
Answer: C
Explanation: Alkynes possess a highly unsaturated carbon-carbon triple bond.

Type: MCQ
Q054: Which compound belongs to the alkyne family?
Option: A: Propene
Option: B: Propane
Option: C: Propyne
Option: D: Propanol
Answer: C
Explanation: Propyne contains a triple bond, making it an alkyne.

Topic: Functional Groups and Derivatives (Oxygen & Nitrogen Families)
Type: MCQ
Q055: Which of the following functional groups is characteristic of alkanols (alcohols)?
Option: A: -OH
Option: B: -CHO
Option: C: -CO-
Option: D: -COOH
Answer: A
Explanation: Alkanols are identified by the attached hydroxyl -OH group.

Type: MCQ
Q056: What is the main product formed when ethanol undergoes dehydration with excess concentrated H2SO4 at 170°C?
Option: A: Ethene
Option: B: Ethane
Option: C: Ethoxyethane
Option: D: Ethyl hydrogen sulphate
Answer: A
Explanation: High temperature ethanol dehydration shifts equilibrium toward gas ethene.

Type: MCQ
Q057: Which functional group is present in alcohols?
Option: A: -COOH
Option: B: -NH2
Option: C: -CHO
Option: D: -OH
Answer: D
Explanation: Hydroxyl groups represent the functional signature of alcohol molecules.

Type: MCQ
Q058: Which functional group is found in carboxylic acids?
Option: A: -OH
Option: B: -COOH
Option: C: -CN
Option: D: -CHO
Answer: B
Explanation: Carboxylic acids are defined by the carbonyl-hydroxyl -COOH pair.

Type: MCQ
Q059: Which functional group is present in aldehydes?
Option: A: -CHO
Option: B: -COOH
Option: C: -OH
Option: D: -NH2
Answer: A
Explanation: Aldehydes feature a terminal formyl group denoted as -CHO.

Type: MCQ
Q060: Haloalkanes contain which element?
Option: A: Oxygen
Option: B: Sulphur
Option: C: Halogen
Option: D: Nitrogen
Answer: C
Explanation: Haloalkanes consist of alkanes bonded with Group 17 halogens.

Type: MCQ
Q061: CH3Cl is called:
Option: A: Methanoic acid
Option: B: Methanal
Option: C: Methanol
Option: D: Chloromethane
Answer: D
Explanation: One carbon chain containing a single chlorine branch substituent.

Type: MCQ
Q062: CH3CH2Br is called:
Option: A: Bromoethane
Option: B: Ethanol
Option: C: Bromoethene
Option: D: Ethanal
Answer: A
Explanation: Saturated two carbon alkane bound directly to a bromine atom.

Type: MCQ
Q063: Which is a haloalkane?
Option: A: CH3OH
Option: B: CH3COOH
Option: C: CH3Cl
Option: D: CH3NH2
Answer: C
Explanation: Chloromethane contains a halogen bond, establishing its classification.

Type: MCQ
Q064: Amines contain the functional group:
Option: A: -COOH
Option: B: -CHO
Option: C: -NH2
Option: D: -OH
Answer: C
Explanation: Amines are distinguished by their functional basic amino -NH2 group.

Type: MCQ
Q065: CH3NH2 is called:
Option: A: Methanol
Option: B: Methylamine
Option: C: Methanoic acid
Option: D: Methanal
Answer: B
Explanation: Single carbon alkane attached directly to basic amino group.

Type: MCQ
Q066: Amines are derivatives of:
Option: A: Oxygen
Option: B: Methane
Option: C: Water
Option: D: Ammonia
Answer: D
Explanation: Replacing hydrogen atoms in ammonia creates organic amine configurations.

Type: MCQ
Q067: The functional group of nitriles is:
Option: A: –CHO
Option: B: –CN
Option: C: –OH
Option: D: –NH₂
Answer: B
Explanation: Nitriles feature a carbon-nitrogen triple bond functional unit.

Type: MCQ
Q070: The simplest aldehyde is:
Option: A: Methanal
Option: B: Ethanal
Option: C: Butanal
Option: D: Propanal
Answer: A
Explanation: Formaldehyde contains a single carbon atom named systematically methanal.

Type: MCQ
Q071: CH₃COCH₃ is called:
Option: A: Propanone
Option: B: Propanal
Option: C: Propanoic acid
Option: D: Propanol
Answer: A
Explanation: Three-carbon chain containing an interior ketone carbonyl functional group.

Type: MCQ
Q072: CH₃COOH is the IUPAC name of:
Option: A: Propanoic acid
Option: B: Methanoic acid
Option: C: Ethanoic acid
Option: D: Butanoic acid
Answer: C
Explanation: Two carbon structure containing a carboxylic acid functional end.

Type: MCQ
Q073: The functional group of carboxylic acids is:
Option: A: –COOH
Option: B: –OH
Option: C: –NH₂
Option: D: –CHO
Answer: A
Explanation: Carboxyl group –COOH is the signature of alkanoic families.

Type: MCQ
Q074: What is the IUPAC name of CH₃CH(CH₃)CH₂CH₃?
Option: A: 3-Methylbutane
Option: B: Butane
Option: C: 2-Methylbutane
Option: D: Pentane
Answer: C
Explanation: Four carbon chain with a single methyl group on position two.

Type: MCQ
Q075: What is the IUPAC name of CH₃CH₂CH(CH₃)CH₂CH₃?
Option: A: 2-Methylpentane
Option: B: 2-Ethylbutane
Option: C: Hexane
Option: D: 3-Methylpentane
Answer: D
Explanation: Five carbon main line with a methyl attached at center position three.

Type: MCQ
Q076: What is the IUPAC name of CH₃CH₂OH?
Option: A: Methanol
Option: B: Butanol
Option: C: Propanol
Option: D: Ethanol
Answer: D
Explanation: Two carbon saturated single bond chain holding a hydroxyl group.

Type: MCQ
Q077: What is the IUPAC name of CH₃CHO?
Option: A: Ethanoic acid
Option: B: Ethanol
Option: C: Ethanal
Option: D: Methanal
Answer: C
Explanation: Two carbon organic compound containing a terminal aldehyde group.

Type: MCQ
Q078: What is the IUPAC name of CH₃CH₂COOH?
Option: A: Ethanoic acid
Option: B: Methanoic acid
Option: C: Butanoic acid
Option: D: Propanoic acid
Answer: D
Explanation: Three carbon saturated structure holding a terminal carboxylic group.

Type: MCQ
Q079: Which compound is an alcohol?
Option: A: CH₃OH
Option: B: CH₃Cl
Option: C: CH₃CHO
Option: D: CH₃COOH
Answer: A
Explanation: Methanol features a hydroxyl group, classifying it as alcohol.

Type: MCQ
Q080: The longest continuous carbon chain determines the:
Option: A: Functional group
Option: B: Parent name
Option: C: Prefix
Option: D: Suffix
Answer: B
Explanation: IUPAC rules dictate root parent names stem from main chain lengths.

Type: MCQ
Q081: A methyl group contains:
Option: A: Two carbon atoms
Option: B: Three carbon atoms
Option: C: Four carbon atoms
Option: D: One carbon atom
Answer: D
Explanation: Alkyl branch containing one carbon atom is called methyl.

Type: MCQ
Q082: Which compound contains the –NH₂ functional group?
Option: A: Methanal
Option: B: Methanoic acid
Option: C: Methanol
Option: D: Methylamine
Answer: D
Explanation: Methylamine possesses an amine functional group bonded to methyl.

Type: MCQ
Q083: Which of the following is the correct IUPAC name of HCOOH?
Option: A: Propanoic acid
Option: B: Methanoic acid
Option: C: Ethanoic acid
Option: D: Butanoic acid
Answer: B
Explanation: One carbon carboxylic acid structure is systematically named methanoic acid.

Type: MCQ
Q084: Which compound is commonly called acetone?
Option: A: Propanoic acid
Option: B: Propanol
Option: C: Propanal
Option: D: Propanone
Answer: D
Explanation: Acetone represents the common commercial name for dimethyl ketone (propanone).

Type: MCQ
Q085: Which compound is commonly known as acetic acid?
Option: A: Butanoic acid
Option: B: Propanoic acid
Option: C: Ethanoic acid
Option: D: Methanoic acid
Answer: C
Explanation: Acetic acid is the historic trivial moniker for ethanoic acid.

Topic: Structural and Stereoisomerism
Type: MCQ
Q086: Isomerism is defined in organic chemistry as the existence or occurrence of two or more compounds with:
Option: A: the same molecular formula but different molecular structures
Option: B: identical molecular formulas and identical structural arrangements
Option: C: different molecular formulas and different molecular masses
Option: D: different molecular formulas but identical structural frameworks
Answer: A
Explanation: Isomers share molecular formulas but differ in structure configurations.

Type: MCQ
Q087: Chemical compounds that exhibit the phenomenon of isomerism are formally referred to as:
Option: A: allotropes
Option: B: isomers
Option: C: polymers
Option: D: homologues
Answer: B
Explanation: Compounds showing identical formula with unique setups are isomers.

Type: MCQ
Q088: Isomers that belong to the exact same homologous series exhibit:
Option: A: similar chemical properties but different physical properties
Option: B: different chemical properties but identical physical properties
Option: C: neither similar chemical properties nor identical physical properties
Option: D: completely identical physical properties and identical chemical properties
Answer: A
Explanation: Family isomers have matching functionality but unique physical values.

Type: MCQ
Q089: Which statement is true regarding structural isomers that belong to completely different homologous series?
Option: A: They share neither their physical properties nor their chemical properties.
Option: B: They exhibit a regular and predictable gradation in all physical constants.
Option: C: They possess identical physical properties but different chemical reactions.
Option: D: They possess identical chemical properties but different physical properties.
Answer: A
Explanation: Belongs to separate families, showing completely unique interactions.

Type: MCQ
Q090: Both n-butane and 2-methylpropane are structural isomers that share the exact molecular formula:
Option: A: C3H8
Option: B: C5H12
Option: C: C4H10
Option: D: C4H8
Answer: C
Explanation: Both molecules possess four carbons and ten hydrogens total.

Type: MCQ
Q091: What is the specific boiling point recorded in the notes for the linear unbranched isomer n-butane?
Option: A: -24°C
Option: B: -10°C
Option: C: +78°C
Option: D: -0.5°C
Answer: D
Explanation: Straight chain n-butane boils closely right at -0.5°C.

Type: MCQ
Q092: What is the specific boiling point recorded in the notes for the branched chain isomer 2-methylpropane (isobutane)?
Option: A: -139°C
Option: B: +1.0°C
Option: C: -10°C
Option: D: -0.5°C
Answer: C
Explanation: Increased branching lowers surface contact area, dropping boiling points to -10°C.

Type: MCQ
Q093: The major structural classification of isomerism branches into which two primary divisions?
Option: A: Structural isomerism and Stereoisomerism
Option: B: Geometrical isomerism and Optical isomerism
Option: C: Metamerism and Tautomerism
Option: D: Chain isomerism and Positional isomerism
Answer: A
Explanation: Organic variations divide cleanly into structural or stereo groups.

Type: MCQ
Q094: Structural isomerism is defined as the phenomenon whereby two or more chemical structures:
Option: A: can rotate plane-polarized light in opposite configurations
Option: B: can be represented by the exact same molecular formula
Option: C: differ only in their three-dimensional spatial orientation
Option: D: possess identical physical states and boiling points
Answer: B
Explanation: Structural variation means identical counts bonded via different connectivity patterns.

Type: MCQ
Q095: Which of the following is true regarding structural isomers according to the text?
Option: A: They are always non-superimposable mirror images of each other.
Option: B: They are different conformations of the same molecule caused by single bond rotation.
Option: C: They are entirely different compounds with different structural properties.
Option: D: They always possess identical melting points and identical boiling points.
Answer: C
Explanation: Unique layouts form independent substances with individual physical metrics.

Type: MCQ
Q096: How do structural isomers differ fundamentally at the microscopic scale?
Option: A: In the total percentage composition of carbon by mass.
Option: B: Only in the way their outer electron shells overlap.
Option: C: In the way their component atoms or groups are bonded to one another.
Option: D: In the total number and types of atomic nuclei present.
Answer: C
Explanation: Atomic arrangement connectivity links vary distinctly among structural isomers.

Type: MCQ
Q097: Into how many distinct sub-classes is Structural Isomerism divided in the organizational chart?
Option: A: 2 sub-classes
Option: B: 4 sub-classes
Option: C: 5 sub-classes
Option: D: 3 sub-classes
Answer: C
Explanation: Divides into chain, position, functional, metamerism, and tautomerism.

Type: MCQ
Q098: Into what two specific fields does Stereoisomerism divide?
Option: A: Chain isomerism and Branched chain isomerism
Option: B: Geometric isomerism and Optical isomerism
Option: C: Metamerism and Tautomerism
Option: D: Positional isomerism and Functional group isomerism
Answer: B
Explanation: Three dimensional isomers divide into geometric and optical spaces.

Type: MCQ
Q099: Isomers that arise from the continuous, free rotation about a single covalent bond are called:
Option: A: conformers
Option: B: tautomers
Option: C: diastereomers
Option: D: enantiomers
Answer: A
Explanation: Conformers interconvert rapidly through simple single bond orbital rotation.

Type: MCQ
Q100: What is another name given to skeletal isomerism in your organic chemistry notes?
Option: A: Positional isomerism
Option: B: Chain or branched chain isomerism
Option: C: Metamerism
Option: D: Stereoisomerism
Answer: B
Explanation: Skeletal differences are widely called chain or branched isomers.

Type: MCQ
Q101: Skeletal chain isomerism occurs when isomers have the same number and kind of atoms but exhibit different structures due to:
Option: A: changing the functional group to a different homologous series
Option: B: moving the position of a multiple double bond along the line
Option: C: the direction they rotate a beam of plane-polarized light
Option: D: the presence of branched chains in the carbon skeleton
Answer: D
Explanation: Variations occur across carbon backbone branching patterns.

Type: MCQ
Q102: What physical shapes can the carbon framework assume in skeletal chain isomerism?
Option: A: Cyclic ring or aromatic structure
Option: B: Hexagonal sheet or helical form
Option: C: Straight chain or branched chain
Option: D: Cis configuration or trans configuration
Answer: C
Explanation: Carbon alignment framework is linear straight or split branched.

Type: MCQ
Q103: According to the examples provided, butane has two structural isomers, while pentane possesses:
Option: A: four isomers
Option: B: two isomers
Option: C: three isomers
Option: D: five isomers
Answer: C
Explanation: Pentane forms n-pentane, isopentane, and neopentane chain options.

Type: MCQ
Q104: According to the notes, how many structural chain isomers can be formed by an alkane with six carbon atoms (hexane)?
Option: A: 4 isomers
Option: B: 3 isomers
Option: C: 6 isomers
Option: D: 5 isomers
Answer: D
Explanation: Hexane generates five structurally distinct stable chain arrangements.

Type: MCQ
Q105: According to the notes, how many structural chain isomers can be formed by an alkane with seven carbon atoms (heptane)?
Option: A: 7 isomers
Option: B: 9 isomers
Option: C: 5 isomers
Option: D: 8 isomers
Answer: B
Explanation: Heptane possesses nine distinct structural skeletal isomer variations.

Type: MCQ
Q106: Which of the following compounds is the completely linear, straight-chain structural isomer of pentane?
Option: A: Isopentane
Option: B: Neopentane
Option: C: n-pentane
Option: D: Cyclopentane
Answer: C
Explanation: The prefix n- denotes regular normal straight-chain unbranched isomers.

Type: MCQ
Q107: What is the systematic IUPAC name for the structural isomer of butane that features a single branched methyl group?
Option: A: 2-Methylbutane
Option: B: Dimethylethane
Option: C: 2-Methylpropane (Isobutane)
Option: D: Cyclobutane
Answer: C
Explanation: Branching at carbon two reduces main chain to propane.

Type: MCQ
Q108: What compound is represented by the formula layout CH3-CH2-CH(CH3)-CH2-CH2-CH3?
Option: A: 3,3-Dimethylpentane
Option: B: 2-Methylhexane
Option: C: 3-Methylhexane
Option: D: 2,3-Dimethylpentane
Answer: C
Explanation: Six carbon backbone chain holding a methyl group on carbon three.

Type: MCQ
Q109: What is the systematic IUPAC name for the structure CH3-CH(CH3)-CH(CH3)-CH2-CH3?
Option: A: 2,3-Dimethylpentane
Option: B: 2,3-Dimethylbutane
Option: C: 3,4-Dimethylpentane
Option: D: 2,2-Dimethylpentane
Answer: A
Explanation: Five carbon main chain possessing methyl groups on positions two and three.

Subject:make up
Topic:mouy
Type: MCQ
Q110: What is the systematic IUPAC name written for compound CH3-C(CH3)2-CH2-CH2-CH3?
Option: A: 2,3-Dimethylpentane
Option: B: 3,3-Dimethylpentane
Option: C: 2,2-Dimethylpentane
Option: D: 2,4-Dimethylpentane
Answer: C
Explanation: Position two holds two methyl substituents along five carbon parent.

Type: MCQ
Q111: Which formula layout corresponds directly to the isomer named 3,3-Dimethylpentane?
Option: A: CH3-CH2-CH(CH3)-CH2-CH2-CH3
Option: B: CH3-CH(CH3)-CH2-CH(CH3)-CH3
Option: C: CH3-C(CH3)2-CH(CH3)-CH3
Option: D: CH3-CH2-C(CH3)2-CH2-CH3
Answer: D
Explanation: Central carbon number three links symmetrical twin methyl branches.

Type: MCQ
Q112: What is the systematic IUPAC name for the formula structure CH3-CH(CH3)-CH2-CH(CH3)-CH3?
Option: A: 2,2-Dimethylpentane
Option: B: 2,4-Dimethylpentane
Option: C: 3,3-Dimethylpentane
Option: D: 2,3-Dimethylpentane
Answer: B
Explanation: Main chain carbons two and four branch out single methyls.

Type: MCQ
Q113: What is the IUPAC name assigned to structure CH3-C(CH3)2-CH(CH3)-CH3?
Option: A: 2,4-Dimethylpentane
Option: B: 2,3,3-Trimethylbutane
Option: C: 2,2,3-Trimethylbutane
Option: D: 2,2-Dimethylpentane
Answer: C
Explanation: Four carbon base with three methyl points at two, two, three.

Type: MCQ
Q114: How many carbon atoms make up the principal continuous main chain in a molecule of 3-Methylhexane?
Option: A: 4 carbon atoms
Option: B: 6 carbon atoms
Option: C: 7 carbon atoms
Option: D: 5 carbon atoms
Answer: B
Explanation: The root keyword hexane explicitly means a six carbon chain.

Type: MCQ
Q115: Positional isomers are defined as structural isomers which differ only in:
Option: A: the spatial configuration across a rigid double covalent bond axis
Option: B: the position occupied by a particular atom or substituent group in the carbon chain
Option: C: the unequal distribution of carbon lengths around a central heteroatom
Option: D: the total number and kinds of functional groups within the molecule
Answer: B
Explanation: Framework remains identical while functional location position varies along line.

Type: MCQ
Q116: What example molecular formula is introduced to illustrate positional isomerism?
Option: A: C4H10
Option: B: C3H7Br
Option: C: C2H6O
Option: D: C5H12
Answer: B
Explanation: Bromopropane formula displays shifts between position one and two locations.

Type: MCQ
Q117: Where is the bromine substituent atom located on the carbon chain in a molecule of 2-bromopropane?
Option: A: On a separate branched methyl group
Option: B: Alternating between both ends of the chain
Option: C: On the middle (second) carbon atom
Option: D: On the first carbon atom
Answer: C
Explanation: Numerical suffix locant two dictates attachment site at center carbon.

Type: MCQ
Q118: What molecular formula is used to illustrate the positional isomerism of an alkanol?
Option: A: C3H7OH
Option: B: C2H6O
Option: C: C5H12O
Option: D: C4H10O
Answer: D
Explanation: Four carbon alcohol forms classic positional butanol isomers.

Type: MCQ
Q119: Which compound is a classic positional isomer of Butan-1-ol?
Option: A: Butan-2-ol
Option: B: Diethylether
Option: C: Ethoxyethane
Option: D: 2-Methylpropan-2-ol
Answer: A
Explanation: Shifting hydroxyl to carbon two converts 1-ol into 2-ol.

Type: MCQ
Q120: What is the name and classification of a tertiary (3°) alcohol with the formula C4H10O?
Option: A: Butan-1-ol, 1° alcohol
Option: B: Butan-2-ol, 2° alcohol
Option: C: 2-Methylpropan-1-ol, 2° alcohol
Option: D: 2-Methylpropan-2-ol, 3° alcohol
Answer: D
Explanation: Central carbon links to hydroxyl plus three surrounding methyl parts.

Type: MCQ
Q121: Why do Butan-1-ol and Butan-2-ol qualify specifically as positional isomers?
Option: A: They belong to completely separate homologous series.
Option: B: They have different configurations around a central carbon atom.
Option: C: They contain different total counts of saturated carbon atoms.
Option: D: They differ only in the placement location of the reactive hydroxyl (-OH) functional group along an identical four-carbon chain.
Answer: D
Explanation: Carbon structure matches but functional -OH changes its location site.

Type: MCQ
Q122: Metamerism is defined as a form of structural isomerism that arises due to:
Option: A: non-superimposable mirror matching dimensional shapes
Option: B: different numbers of multiple bonds along the principal chain
Option: C: different functional groups attached to the main line chain
Option: D: unequal distribution of carbon atoms or difference in the size of alkyl groups on either side of the functional group
Answer: D
Explanation: Alkyl lengths flanking central bridging heteroatoms vary asymmetry size.

Type: MCQ
Q123: In which families of organic compounds is metamerism commonly found?
Option: A: Carboxylic acids, esters, and acid anhydrides
Option: B: Arenes, phenols, and aromatic nitro compounds
Option: C: Ethers, ketones, amines, alkanols or alkyl halides
Option: D: Alkanes, alkenes, alkynes, and cycloalkanes
Answer: C
Explanation: Interrupted chains like ethers, ketones, and secondary amines display metamerism.

Type: MCQ
Q124: Which pair of compounds represents a pair of metamers according to your notes?
Option: A: Diethyl ether and Dimethyl ether
Option: B: Ethoxyethane and Propoxyethane
Option: C: Diethyl ether (Ethoxyethane) and Methyl propyl ether (1-Methoxypropane)
Option: D: Methoxyethane and Ethoxyethane
Answer: C
Explanation: Both formulas count C4H10O with shifting unsymmetrical oxygen alkyl distributions.

Type: MCQ
Q125: Carboxylic acids (alkanoic acids) are functional group isomers with which family?
Option: A: Alkanals
Option: B: Amines
Option: C: Alkanols
Option: D: Alkanoates (Esters)
Answer: D
Explanation: Acids and esters share general structural chemical formulation CnH2nO2.

Type: MCQ
Q126: According to the priority trend rules, which element holds the absolute highest priority based on atomic number?
Option: A: Chlorine (Cl)
Option: B: Iodine (I)
Option: C: Bromine (Br)
Option: D: Carbon (C)
Answer: B
Explanation: Highest priority goes to Iodine due to maximum atomic number.

Type: MCQ
Q127: Compounds having the same molecular formula but different spatial arrangement of atoms are called:
Option: A: Allotropes
Option: B: Isotopes
Option: C: Homologues
Option: D: Isomers
Answer: D
Explanation: Matching chemical formulas arranged differently inside space are stereoisomers.

Type: MCQ
Q128: Optical isomerism is caused by:
Option: A: Pressure
Option: B: Density
Option: C: Heat
Option: D: Chirality
Answer: D
Explanation: Asymmetric molecular structures show chirality, rotating light paths differently.

Type: MCQ
Q129: A carbon atom attached to four different groups is called a:
Option: A: Tertiary carbon
Option: B: Primary carbon
Option: C: Chiral carbon
Option: D: Secondary carbon
Answer: C
Explanation: Asymmetric centers holding four distinct branches form chiral carbons.

Type: MCQ
Q130: Which of the following exhibits geometrical isomerism?
Option: A: But-2-ene
Option: B: Propane
Option: C: Methane
Option: D: Ethane
Answer: A
Explanation: Rigid double bond restricts rotation, making cis/trans configurations possible.

Topic: Aromatic Hydrocarbons
Type: MCQ
Q131: The molecular formula of benzene is:
Option: A: C₅H₁₂
Option: B: C₇H₈
Option: C: C₆H₁₂
Option: D: C₆H₆
Answer: D
Explanation: Symmetrical cyclic unsaturated ring containing exactly six carbons and hydrogens.

Type: MCQ
Q132: Benzene contains:
Option: A: One carbon atom
Option: B: Eight carbon atoms
Option: C: Six carbon atoms
Option: D: Four carbon atoms
Answer: C
Explanation: Core hexagonal aromatic ring is comprised of six carbons.

Type: MCQ
Q133: The shape of a benzene molecule is:
Option: A: Tetrahedral
Option: B: Linear
Option: C: Square
Option: D: Hexagonal
Answer: D
Explanation: Planar cyclic ring arrangement forms a perfect regular hexagon.

Type: MCQ
Q134: The characteristic reaction of benzene is:
Option: A: Addition
Option: B: Polymerization
Option: C: Substitution
Option: D: Neutralization
Answer: C
Explanation: Highly stable delocalized aromatic rings undergo electrophilic substitution reactions.

Topic: Kinetics and Catalysis
Type: MCQ
Q135: The rate of a chemical reaction generally increases with:
Option: A: Decrease in temperature
Option: B: Increase in temperature
Option: C: Decrease in concentration
Option: D: Removal of catalyst
Answer: B
Explanation: Higher kinetic heat yields more frequent energetic molecular collisions.

Type: MCQ
Q136: A catalyst works by:
Option: A: Stopping the reaction
Option: B: Decreasing activation energy
Option: C: Increasing molecular weight
Option: D: Increasing activation energy
Answer: B
Explanation: Catalysts open an alternative pathway possessing much lower activation energy barriers.

Topic: Inorganic Chemistry and Periodic Table Trends
Type: MCQ
Q137: Which of the following is an alkali metal belonging to Group IA?
Option: A: Chlorine
Option: B: Aluminium
Option: C: Calcium
Option: D: Sodium
Answer: D
Explanation: Sodium sits in Group 1, standard highly reactive alkali metal.

Type: MCQ
Q138: Which property is common to non-metals?
Option: A: High electrical conductivity
Option: B: Malleability
Option: C: Poor electrical conductivity
Option: D: Ductility
Answer: C
Explanation: Nonmetals lack free electrons, showing strong electrical insulation properties.

Type: MCQ
Q139: Transition metals are found in which block of the periodic table?
Option: A: s-block
Option: B: p-block
Option: C: f-block
Option: D: d-block
Answer: D
Explanation: Transition series possess progressively filling valence d-orbital electron sublevels.

Type: MCQ
Q140: Which of the following is a transition metal?
Option: A: Iron
Option: B: Sodium
Option: C: Potassium
Option: D: Calcium
Answer: A
Explanation: Iron belongs inside group 8 transition metal d-block elements.

Type: MCQ
Q141: Transition metals commonly form:
Option: A: Weak bonds only
Option: B: Colourless compounds only
Option: C: Coloured compounds
Option: D: Only gases
Answer: C
Explanation: d-to-d electronic transition states reflect visible wavelengths creating color.

Type: MCQ
Q142: Which of the following is a characteristic property of transition metals?
Option: A: Very low density
Option: B: Variable oxidation states
Option: C: Poor conductivity
Option: D: Low melting points
Answer: B
Explanation: Incomplete d shells support lose/gain variants producing multiple charges.

Topic: Advanced Saturated, Unsaturated, and Functional Group Organic Reactions
Type: MCQ
Q143: The production of alkanes by the reduction of alkyl halides with zinc and dilute hydrochloric acid is an example of what reaction type?
Option: A: Free radical addition reaction
Option: B: Electrophilic aromatic substitution
Option: C: Nucleophilic substitution reaction
Option: D: Reduction reaction via nascent hydrogen
Answer: D
Explanation: Zinc and HCl produce nascent hydrogen which reduces alkyl halides.

Type: MCQ
Q144: Which of the following equations accurately depicts the Wurtz synthesis reaction used to prepare symmetrical higher alkanes?
Option: A: R-COOH + NaOH → R-H + Na2CO3
Option: B: 2R-X + 2Na (in dry ether) → R-R + 2NaX
Option: C: R-X + H2O → R-OH + HX
Option: D: R-H + X2 → R-X + HX
Answer: B
Explanation: Wurtz synthesis couples two alkyl radicals using metallic sodium.

Type: MCQ
Q145: What key intermediate species is formed during the catalytic hydration of alkenes in the presence of an acid catalyst?
Option: A: Carbocations (carbonium ions)
Option: B: Carbanion intermediate
Option: C: Cyclic halonium ring ion
Option: D: Symmetrical free radical
Answer: A
Explanation: Acid protonation of an alkene generates a carbocation intermediate.

Type: MCQ
Q146: When an unsymmetrical alkene reacts with a hydrogen halide (HX), the hydrogen atom adds to the carbon with more hydrogen atoms. This rule is called:
Option: A: Anti-Markovnikov peroxide effect
Option: B: Huckel's aromatic rule
Option: C: Markovnikov's rule
Option: D: Saytzeff's elimination criteria
Answer: C
Explanation: Markovnikov's rule dictates regiochemistry based on carbocation stability.

Type: MCQ
Q147: Which reagent combination effectively converts an alkyne directly into a cis-alkene via partial controlled hydrogenation?
Option: A: Excess hydrogen gas with platinum catalyst
Option: B: Concentrated sulfuric acid at high temperatures
Option: C: Lindlar's catalyst (Pd/CaCO3 poisoned with quinoline)
Option: D: Sodium metal liquid ammonia solution
Answer: C
Explanation: Lindlar's poisoned catalyst yields syn-addition giving cis-alkenes.

Type: MCQ
Q148: What structural feature dictates that terminal alkynes (e.g., ethyne) display weakly acidic chemical behavior?
Option: A: Resonance stabilization of the internal double bond network
Option: B: The strong sp3 character of the C-H bond orbital
Option: C: The high s-character (50%) of the sp-hybridized carbon atom
Option: D: Steric hindrance around the interior carbon framework
Answer: C
Explanation: sp hybridized carbon holds electrons tightly, making H acidic.

Type: MCQ
Q149: The primary product obtained from the acid-catalyzed hydration of ethyne using mercuric sulfate (HgSO4) and dilute H2SO4 is:
Option: A: Ethoxyethane
Option: B: Ethanol
Option: C: Ethanoic acid
Option: D: Ethanal (Acetaldehyde)
Answer: D
Explanation: Ethyne hydration yields vinyl alcohol which tautomerizes to ethanal.

Type: MCQ
Q150: Which compound acts as the principal attacking electrophile during the nitration of benzene with concentrated HNO3 and H2SO4?
Option: A: Nitrite anion (NO2⁻)
Option: B: Nitronium ion (NO2⁺)
Option: C: Nitrosyl radical (NO•)
Option: D: Nitrogen dioxide gas (NO2)
Answer: B
Explanation: Sulfuric acid protonates nitric acid to generate nitronium ions.

Type: MCQ
Q151: The standard mechanism for the chlorination or bromination of benzene in the presence of anhydrous FeCl3 or AlCl3 is:
Option: A: Concerted cycloaddition process
Option: B: Free radical chain substitution reaction
Option: C: Electrophilic aromatic substitution (SEAr)
Option: D: Nucleophilic bimolecular substitution (SN2)
Answer: C
Explanation: Lewis acids generate halonium ions for electrophilic aromatic substitution.

Type: MCQ
Q152: Which of the following functional groups acts as a strong deactivating meta-director when attached to a benzene ring?
Option: A: Amino group (-NH2)
Option: B: Hydroxyl group (-OH)
Option: C: Methyl group (-CH3)
Option: D: Nitro group (-NO2)
Answer: D
Explanation: Nitro groups withdraw electron density strongly via inductive/resonance effects.

`;

        // ========== PARSER ==========
        function parseQuestions(text) {
            const lines = text.split('\n');
            const questions = [];
            let currentTopic = 'general';
            let currentQuestion = null;
            let currentOptions = {};
            let explanation = [];
            let inExplanation = false;
            let inOptions = false;

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trimRight();
                let trimmed = line.trim();

                if (trimmed === '') {
                    if (currentQuestion && currentQuestion.text) {
                        if (explanation.length > 0) {
                            currentQuestion.explanation = explanation.join('\n');
                            explanation = [];
                        }
                        if (currentQuestion.type === 'mcq' && Object.keys(currentOptions).length === 4) {
                            currentQuestion.options = { ...currentOptions };
                            currentQuestion.answer = currentQuestion.answer || '';
                            questions.push({ ...currentQuestion, topic: currentTopic });
                        } else if (currentQuestion.type === 'fill' && currentQuestion.answer) {
                            questions.push({ ...currentQuestion, topic: currentTopic });
                        }
                        currentQuestion = null;
                        currentOptions = {};
                        inOptions = false;
                        inExplanation = false;
                    }
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('topic:')) {
                    currentTopic = trimmed.substring(6).trim() || 'general';
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('type:')) {
                    let type = trimmed.substring(5).trim().toLowerCase();
                    if (type === 'mcq' || type === 'fill') {
                        currentQuestion = { type: type, text: '', answer: '', explanation: '' };
                        inOptions = (type === 'mcq');
                        inExplanation = false;
                        currentOptions = {};
                    }
                    continue;
                }

                if (trimmed.match(/^Q\d+:/i)) {
                    if (currentQuestion) {
                        currentQuestion.text = trimmed.substring(trimmed.indexOf(':') + 1).trim();
                    }
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('option:')) {
                    inOptions = true;
                    let optionText = trimmed.substring(7).trim();
                    let match = optionText.match(/^([A-D]):\s*(.+)$/i);
                    if (match) {
                        currentOptions[match[1].toUpperCase()] = match[2].trim();
                    }
                    continue;
                }

                if (inOptions) {
                    let match = trimmed.match(/^([A-D]):\s*(.+)$/i);
                    if (match) {
                        currentOptions[match[1].toUpperCase()] = match[2].trim();
                        continue;
                    }
                    let indentMatch = trimmed.match(/^\s+([A-D]):\s*(.+)$/i);
                    if (indentMatch) {
                        currentOptions[indentMatch[1].toUpperCase()] = indentMatch[2].trim();
                        continue;
                    }
                    inOptions = false;
                }

                if (trimmed.toLowerCase().startsWith('answer:')) {
                    if (currentQuestion) {
                        currentQuestion.answer = trimmed.substring(7).trim();
                    }
                    inExplanation = false;
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('explanation:')) {
                    inExplanation = true;
                    let expText = trimmed.substring(11).trim();
                    explanation = expText ? [expText] : [];
                    continue;
                }

                if (inExplanation) {
                    explanation.push(line);
                    continue;
                }
            }

            if (currentQuestion && currentQuestion.text) {
                if (explanation.length > 0) {
                    currentQuestion.explanation = explanation.join('\n');
                }
                if (currentQuestion.type === 'mcq' && Object.keys(currentOptions).length === 4) {
                    currentQuestion.options = { ...currentOptions };
                    questions.push({ ...currentQuestion, topic: currentTopic });
                } else if (currentQuestion.type === 'fill' && currentQuestion.answer) {
                    questions.push({ ...currentQuestion, topic: currentTopic });
                }
            }
            return { questions };
        }

        // ========== IMPORTER ==========
        function importToApp() {
            const result = parseQuestions(MY_QUESTION_BANK);
            if (result.questions.length === 0) {
                console.warn("⚠️ No valid questions parsed.");
                return;
            }

            const subjectName = "Probability I";
            const newSubject = {
                id: 'subject_' + Date.now(),
                name: subjectName,
                duration: 30,
                questions: [],
                topics: [],
                notes: {},
                topicImages: {}
            };

            const topicMap = {};

            result.questions.forEach(q => {
                let topicName = q.topic || 'General';
                let topicId = topicMap[topicName];
                if (!topicId) {
                    topicId = 'topic_' + Date.now() + '_' + Math.random();
                    topicMap[topicName] = topicId;
                    newSubject.topics.push({ id: topicId, name: topicName });
                }

                const appQuestion = {
                    id: Date.now() + Math.random(),
                    text: q.text,
                    type: q.type === 'mcq' ? 'objective' : 'fill',
                    topicId: topicId,
                    correct: q.answer,
                    explanation: q.explanation || ''
                };

                if (q.type === 'mcq') {
                    appQuestion.options = q.options;
                } else {
                    appQuestion.options = null;
                }

                newSubject.questions.push(appQuestion);
            });

            // Add the new subject to the app's data
            app.data.subjects[newSubject.id] = newSubject;
            app.saveSubjects();

            console.log(`✅ Force-imported ${newSubject.questions.length} questions into "${subjectName}"`);
            
            // Refresh the page to show the new questions
            if (app.showLanding) {
                setTimeout(() => app.showLanding(), 200);
            }
        }

        importToApp();

    } catch (e) {
        console.warn("Question bank import failed:", e.message);
    }
})();
